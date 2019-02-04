import { connect } from 'react-redux';
import _ from 'lodash';
import { AppointmentTypeList } from '../components';
import { getAppointmentTypes, createAppointmentType } from '../appointment-types.actions';
import { 
  showPageLoader,
  hidePageLoader
} from '../../../containers/layouts/actions';

const mapStateToProps = ({ appointmentTypes }) => ({
  appointmentTypes: _.values(appointmentTypes.appointmentTypes),
});

const mapDispatchToProps = {
  getAppointmentTypes,
  createAppointmentType,
  showPageLoader,
  hidePageLoader,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppointmentTypeList);
