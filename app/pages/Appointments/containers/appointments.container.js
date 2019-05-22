import { connect } from 'react-redux';
import _ from 'lodash';
import moment from 'moment';

import { createAppointment, getAppointments, selectAppointment } from '../appointments.actions';
import { getDoctors } from '../../Doctors/doctors.actions';

import { AppointmentListComponent } from '../components';

import { showPageLoader, hidePageLoader } from '../../../containers/layouts/actions';

const normalizeAppointmentList = appointments => _.chain(appointments)
  .values()
  .map(appointment => ({
    title : `Consulta - ${appointment.pacient.full_name}`,
    start : moment(appointment.scheduled_to).toDate(),
    end   : moment(appointment.scheduled_to)
      .add(1, 'hour')
      .toDate(),
    resource: appointment
  }))
  .value();

const mapStateToProps = ({ appointments, doctors }) => ({
  appointments : normalizeAppointmentList(appointments.appointments),
  doctors      : _.values(doctors.doctors)
});

const mapDispatchToProps = {
  createAppointment,
  getAppointments,
  showPageLoader,
  hidePageLoader,
  getDoctors,
  selectAppointment
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppointmentListComponent);
