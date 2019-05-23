import _ from 'lodash';
import { connect } from 'react-redux';
import { withHandlers, compose, lifecycle } from 'recompose';

import { getPacients } from '../../Pacient/pacient.actions';
import { getDoctors } from '../../Doctors/doctors.actions';
import {
  getExamTypes, createExam, selectExam, clearExam, updateExam
} from '../exams.actions';
import { printPdf } from '../../../utils/print-pdf';

import ExamForm from '../components/exam.form.component';

import * as WebAPI from '../../../utils/api.service';
import * as Alert from '../../../components/Alerts';

import { showPageLoader, hidePageLoader } from '../../../containers/layouts/actions';

const mapStateToProps = ({ doctors, pacients, exams }) => ({
  exam      : exams.exam,
  examTypes : _.values(exams.examTypes),
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
  clearExam
};

const showAppointmentPDF = async (appointment, props, form) => {
  try {
    const { data } = await WebAPI.getPdfFile(appointment.receipt_url);

    printPdf(data);
    props.hidePageLoader();
    form.resetFields();
  } catch (error) {
    props.hidePageLoader();

    Alert.error({
      content : 'Não foi possível acessar o arquivo PDF',
      onOk    : () => form.resetFields()
    });
  }
};

const onExamFormSubmit = props => async (values, form) => {
  props.showPageLoader();

  try {
    const { exam: currentExam } = props;
    let response;

    if (currentExam.id) {
      const newExam = {
        id: currentExam.id,
        ...values
      };

      response = await WebAPI.updateExam(currentExam.id, newExam);
      props.updateExam(response);
    } else {
      response = await WebAPI.createExam(values);
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
      const response = await Promise.all([WebAPI.getExamTypes(), WebAPI.getPacients(), WebAPI.getDoctors()]);

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
