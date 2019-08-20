import _ from 'lodash';

import { connect } from 'react-redux';
import { withHandlers, compose, lifecycle } from 'recompose';

import { getPacients } from '../../Pacient/pacient.actions';
import { getDoctors } from '../../Doctors/doctors.actions';
import {
  createAppointment, getAppointmentTypes, updateAppointment, clearAppointment
} from '../appointments.actions';

import { showPageLoader, hidePageLoader } from '../../../containers/layouts/actions';

import { AppointmentForm } from '../components';

import * as ipcService from '../../../utils/ipc.service';
import * as Alert from '../../../components/Alerts';
import { printPdf } from '../../../utils/print-pdf';

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
  getDoctors,
  updateAppointment,
  clearAppointment
};

const showAppointmentPDF = async (appointment, props, form) => {
  props.showPageLoader();
  try {
    // const { data } = await ipcService.getPdfFile(appointment.receipt_url);
    // printPdf(data);
    form.resetFields();
  } catch (error) {
    Alert.error({
      content : 'Não foi possível acessar o arquivo PDF',
      onOk    : () => form.resetFields()
    });
  } finally {
    props.hidePageLoader();
  }
};

const onAppointmentFormSubmit = props => async (values, form) => {
  props.showPageLoader();

  try {
    const appointment = {
      ...props.appointment,
      ...values,
      scheduled_to: values.scheduled_to.toISOString()
    };

    let response;

    if (appointment.id) {
      response = await ipcService.updateAppointment(appointment.id, appointment);
      props.updateAppointment(response.data);
    } else {
      response = await ipcService.createAppointment(appointment);
      props.createAppointment(response.data);
    }

    props.hidePageLoader();

    Alert.confirm({
      content    : 'Agendamento realizado com sucesso. Deseja imprimir comprovante?',
      okText     : 'Sim',
      cancelText : 'Não',
      onOk       : () => {
        showAppointmentPDF(response.data, props, form);
        props.clearAppointment();
      },
      onCancel: () => {
        form.resetFields();
        props.clearAppointment();
      }
    });
  } catch (error) {
    props.hidePageLoader();
    Alert.error({
      content: 'Aconteceu um erro com o agendamento. Tente mais tarde!'
    });
  } finally {
    props.hidePageLoader();
  }
};

const withFormHandlers = withHandlers({
  onSubmitHandler: onAppointmentFormSubmit
});

const withLifeCycle = lifecycle({
  async componentDidMount() {
    this.props.showPageLoader();

    try {
      const responses = await Promise.all([
        ipcService.getPacients(),
        ipcService.getDoctors(),
        ipcService.getAppointmentTypes()
      ]);

      this.props.getPacients(responses[0]);
      this.props.getDoctors(responses[1]);
      this.props.getAppointmentTypes(responses[2]);

      this.props.hidePageLoader();
    } catch (error) {
      this.props.hidePageLoader();
      console.log(error);
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
