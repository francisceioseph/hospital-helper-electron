import { connect } from 'react-redux';
import _ from 'lodash';

import { createSurgery } from './surgery.actions';
import { SurgeryListComponent } from './components';

const mapStateToProps = ({ surgeries }) => ({
  surgeries: _.values(surgeries.surgeries)
});

const mapDispatchToProps = {
  createSurgery
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SurgeryListComponent);
