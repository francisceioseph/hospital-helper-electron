import _ from 'lodash';
import { connect } from 'react-redux';
import { withHandlers, compose, lifecycle } from 'recompose';

import { getPacients } from '../../Pacient/pacient.actions';
import { getDoctors } from '../../Doctors/doctors.actions';
import {
  createAppointment,
  getAppointmentTypes
} from '../appointments.actions';
import { AppointmentForm } from '../components';

import * as WebAPI from '../../../utils/webAPI';
import * as Alert from '../../../components/Alerts';

const mapStateToProps = ({ appointments, doctors, pacients }) => ({
  appointment: appointments.appointment,
  appointmentTypes: _.values(appointments.appointmentTypes),
  pacients: _.values(pacients.pacients),
  doctors: _.values(doctors.doctors)
});

const mapDispatchToProps = {
  createAppointment,
  getAppointmentTypes,
  getPacients,
  getDoctors
};

const onAppointmentFormSubmit = props => async (values, form) => {
  try {
    const { data: appointment } = await WebAPI.createAppointment(values);
    props.createAppointment(appointment);

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
  onSubmitHandler: onAppointmentFormSubmit
});

const withLifeCycle = lifecycle({
  componentDidMount() {
    this.props.getPacients();
    this.props.getDoctors();
    this.props.getAppointmentTypes();
  }
});

const AppointmentContainer = compose(
  withLifeCycle,
  withFormHandlers
)(AppointmentForm);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppointmentContainer);
