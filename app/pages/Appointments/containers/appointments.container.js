import { connect } from 'react-redux';
import _ from 'lodash';
import moment from 'moment';

import { createAppointment, getAppointments } from '../appointments.actions';
import { AppointmentListComponent } from '../components';

const normalizeAppointmentList = appointments =>
  _.chain(appointments)
    .values()
    .map(appointment => ({
      title: `Consulta - ${appointment.pacient.full_name}`,
      start: moment(appointment.scheduled_to).toDate(),
      end: moment(appointment.scheduled_to)
        .add(1, 'hour')
        .toDate(),
      resource: appointment
    }))
    .value();

const mapStateToProps = ({ appointments }) => ({
  appointments: normalizeAppointmentList(appointments.appointments)
});

const mapDispatchToProps = {
  createAppointment,
  getAppointments
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppointmentListComponent);
