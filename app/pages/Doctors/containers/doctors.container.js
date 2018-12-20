import { connect } from 'react-redux';
import _ from 'lodash';

import { getDoctors } from '../doctors.actions';
import { DoctorListComponent } from '../components';

const mapStateToProps = ({ doctors }) => ({
  doctors: _.values(doctors.doctors)
});

const mapDispatchToProps = {
  getDoctors
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DoctorListComponent);
