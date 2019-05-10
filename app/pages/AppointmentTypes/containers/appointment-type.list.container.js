import { connect } from 'react-redux';
import _ from 'lodash';
import { AppointmentTypeList } from '../components';
import {
  getAppointmentTypes,
  createAppointmentType,
  applyAppointmentTypesFilter,
  showAppointmentTypeModal
} from '../appointment-types.actions';
import { showPageLoader, hidePageLoader } from '../../../containers/layouts/actions';

const mapStateToProps = ({ appointmentTypes }) => ({
  appointmentTypes : _.values(appointmentTypes.appointmentTypes),
  visible          : appointmentTypes.showAppointmentTypeModal
});

const mapDispatchToProps = {
  getAppointmentTypes,
  createAppointmentType,
  applyAppointmentTypesFilter,
  showPageLoader,
  hidePageLoader,
  showAppointmentTypeModal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppointmentTypeList);
