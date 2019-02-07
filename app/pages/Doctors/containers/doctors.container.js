import { connect } from 'react-redux';
import _ from 'lodash';

import { getDoctors, filterByName } from '../doctors.actions';
import { DoctorListComponent } from '../components';

import { showPageLoader, hidePageLoader } from '../../../containers/layouts/actions';

const mapStateToProps = ({ doctors }) => ({
  doctors: _.values(doctors.doctors)
});

const mapDispatchToProps = {
  getDoctors,
  filterByName,
  showPageLoader,
  hidePageLoader
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DoctorListComponent);
