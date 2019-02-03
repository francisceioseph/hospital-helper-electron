import _ from 'lodash';
import { connect } from 'react-redux';
import { withHandlers, compose, lifecycle } from 'recompose';

import { getPacients } from '../../Pacient/pacient.actions';
import { getDoctors } from '../../Doctors/doctors.actions';
import { getExamTypes, createExam } from '../exams.actions';

import ExamForm from '../components/exam.form.component';

import * as WebAPI from '../../../utils/webAPI';
import * as Alert from '../../../components/Alerts';

import { 
  pageStartLoadingAction,
  pageStopLoadingAction
} from '../../../containers/layouts/actions';

const mapStateToProps = ({ doctors, pacients, exams }) => ({
  examTypes : _.values(exams.examTypes),
  pacients  : _.values(pacients.pacients),
  doctors   : _.values(doctors.doctors)
});

const mapDispatchToProps = {
  getExamTypes,
  getPacients,
  getDoctors,
  createExam,
  pageStartLoadingAction,
  pageStopLoadingAction
};

const onExamFormSubmit = props => async (values, form) => {
  try {
    const { data: exam } = await WebAPI.createExam(values);
    props.createExam(exam);

    Alert.success({
      content : 'Agendamento realizado com sucesso',
      onOk    : () => form.resetFields()
    });
  } catch (error) {
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
    this.props.pageStartLoadingAction();
    const response = await Promise.all([
      WebAPI.getExamTypes(),
      WebAPI.removeExamType(),
    ]);

    this.props.getExamTypes(response[0]);
    this.props.getPacients(response[1]);
    this.props.getDoctors(response[2]);
    this.props.pageStopLoadingAction();
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
