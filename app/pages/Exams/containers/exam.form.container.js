import _ from 'lodash';
import { connect } from 'react-redux';
import { withHandlers, compose, lifecycle } from 'recompose';

import { getPacients } from '../../Pacient/pacient.actions';
import { getDoctors } from '../../Doctors/doctors.actions';
import { getExamTypes, createExam } from '../exams.actions';

import ExamForm from '../components/exam.form.component';

import * as WebAPI from '../../../utils/webAPI';
import * as Alert from '../../../components/Alerts';

const mapStateToProps = ({ doctors, pacients, exams }) => ({
  examTypes: _.values(exams.examTypes),
  pacients: _.values(pacients.pacients),
  doctors: _.values(doctors.doctors)
});

const mapDispatchToProps = {
  getExamTypes,
  getPacients,
  getDoctors,
  createExam
};

const onExamFormSubmit = props => async (values, form) => {
  try {
    const { data: exam } = await WebAPI.createExam(values);
    props.createExam(exam);

    Alert.success({
      content: 'Agendamento realizado com sucesso',
      onOk: () => form.resetFields()
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
  componentDidMount() {
    this.props.getExamTypes();
    this.props.getPacients();
    this.props.getDoctors();
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
