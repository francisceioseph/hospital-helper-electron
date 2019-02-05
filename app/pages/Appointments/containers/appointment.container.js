import _ from 'lodash';

import { connect } from 'react-redux';
import { withHandlers, compose, lifecycle } from 'recompose';

import { getPacients } from '../../Pacient/pacient.actions';
import { getDoctors } from '../../Doctors/doctors.actions';
import {
  createAppointment,
  getAppointmentTypes
} from '../appointments.actions';

import { 
  showPageLoader,
  hidePageLoader,
} from '../../../containers/layouts/actions';

import { AppointmentForm } from '../components';

import * as WebAPI from '../../../utils/api.service';
import * as Alert from '../../../components/Alerts';

const mapStateToProps = ({ appointments, doctors, pacients }) => ({
  appointment      : appointments.appointment,
  appointmentTypes : _.values(appointments.appointmentTypes),
  pacients         : _.values(pacients.pacients),
  doctors          : _.values(doctors.doctors)
});

const mapDispatchToProps = {
  showPageLoader,
  hidePageLoader,
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
  async componentDidMount() {
    try {
      this.props.showPageLoader();

      const responses = await Promise.all([
        WebAPI.getPacients(),
        WebAPI.getDoctors(),
        WebAPI.getAppointmentTypes(),
      ]);

      this.props.getPacients(responses[0]);
      this.props.getDoctors(responses[1]);
      this.props.getAppointmentTypes(responses[2]);

      this.props.hidePageLoader();
    } catch (error) {
      this.props.hidePageLoader();
      Alert.error({
        content: 'Não foi possível carregar agora. Tente novamente mais tarde.'
      });
    }
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
