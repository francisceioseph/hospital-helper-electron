import { connect } from 'react-redux';
import _ from 'lodash';

import { getDoctors, filterByName, hideEditDoctorModal } from '../doctors.actions';
import { DoctorListComponent } from '../components';

import { showPageLoader, hidePageLoader } from '../../../containers/layouts/actions';

const mapStateToProps = ({ doctors }) => ({
  doctors   : _.values(doctors.doctors),
  doctor    : doctors.doctor,
  showModal : doctors.showModal
});

const mapDispatchToProps = {
  getDoctors,
  filterByName,
  showPageLoader,
  hidePageLoader,
  hideEditDoctorModal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DoctorListComponent);
