import { connect } from 'react-redux';
import _ from 'lodash';

import {

} from '../hospitalizations.actions';
import HospitalizationListComponent from '../components/hospitalization.list';
import { showPageLoader, hidePageLoader } from '../../../containers/layouts/actions';

const mapStateToProps = () => ({
});

const mapDispatchToProps = {
  showPageLoader,
  hidePageLoader,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HospitalizationListComponent);