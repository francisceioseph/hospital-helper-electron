import { connect } from 'react-redux';
import _ from 'lodash';
import { AppointmentTypeList } from '../components';
import { getAppointmentTypes, createAppointmentType } from '../appointment-types.actions';

const mapStateToProps = ({ appointmentTypes }) => ({
  appointmentTypes: _.values(appointmentTypes.appointmentTypes),
});

const mapDispatchToProps = {
  getAppointmentTypes,
  createAppointmentType,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppointmentTypeList);
