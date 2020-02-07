import _ from 'lodash';
import { connect } from 'react-redux';
import { withHandlers, compose, lifecycle } from 'recompose';

import { getPacients } from '../../Pacient/pacient.actions';
import { getDoctors } from '../../Doctors/doctors.actions';
import { showExamTypeModal, getExamTypes } from '../../ExamTypes/exam-types.actions';
import {
  createExam, selectExam, clearExam, updateExam
} from '../exams.actions';

import ExamForm from '../components/exam.form.component';

import * as ipcService from '../../../utils/ipc.service';
import * as Alert from '../../../components/Alerts';

import { showPageLoader, hidePageLoader } from '../../../containers/layouts/actions';

const mapStateToProps = ({
  doctors, pacients, exams, examTypes
}) => ({
  exam      : exams.exam,
  examTypes : _.values(examTypes.examTypes),
  pacients  : _.values(pacients.pacients),
  doctors   : _.values(doctors.doctors)
});

const mapDispatchToProps = {
  getExamTypes,
  getPacients,
  getDoctors,
  createExam,
  showPageLoader,
  hidePageLoader,
  updateExam,
  selectExam,
  clearExam,
  showExamTypeModal
};

const showAppointmentPDF = async (appointment, props, form) => {
  try {
    ipcService.openExamAppointmentPDF(appointment);
    form.resetFields();
  } catch (error) {
    props.hidePageLoader();

    Alert.error({
      content : 'Não foi possível acessar o arquivo PDF',
      onOk    : () => form.resetFields()
    });
  } finally {
    props.hidePageLoader();
  }
};

const onExamFormSubmit = props => async (values, form) => {
  props.showPageLoader();

  try {
    const exam = {
      ...props.exam,
      ...values,
      scheduled_to: values.scheduled_to.toISOString()
    };
    let response;

    if (exam.id) {
      response = await ipcService.updateExam(exam.id, exam);
      props.updateExam(response);
    } else {
      response = await ipcService.createExam(exam);
      props.createExam(response);
    }

    props.hidePageLoader();

    Alert.confirm({
      content    : 'Agendamento realizado com sucesso. Deseja imprimir comprovante?',
      okText     : 'Sim',
      cancelText : 'Não',
      onOk       : () => {
        showAppointmentPDF(response.data, props, form);
        props.clearExam();
      },
      onCancel: () => {
        props.clearExam();
        form.resetFields();
      }
    });
  } catch (error) {
    props.hidePageLoader();

    Alert.error({
      content: 'Aconteceu um erro com o agendamento. Tente mais tarde!'
    });
  }
};

const withFormHandlers = withHandlers({
  onSubmitHandler: onExamFormSubmit
});

const withLifeCycle = lifecycle({
  async componentDidMount() {
    this.props.showPageLoader();

    try {
      const response = await Promise.all([
        ipcService.getExamTypes(),
        ipcService.getPacients(),
        ipcService.getDoctors()
      ]);

      this.props.getExamTypes(response[0]);
      this.props.getPacients(response[1]);
      this.props.getDoctors(response[2]);
    } catch (error) {
      console.log(error);
    } finally {
      this.props.hidePageLoader();
    }
  }
});

const AppointmentContainer = compose(
  withLifeCycle,
  withFormHandlers
)(ExamForm);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppointmentContainer);
