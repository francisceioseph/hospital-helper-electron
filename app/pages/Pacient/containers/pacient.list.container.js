import { connect } from 'react-redux';
import _ from 'lodash';

import { getPacients, filterByName } from '../pacient.actions';
import { PacientListComponent } from '../components';
import { showPageLoader, hidePageLoader } from '../../../containers/layouts/actions';

const mapStateToProps = ({ pacients }) => ({
  pacients: _.values(pacients.pacients)
});

const mapDispatchToProps = {
  getPacients,
  filterByName,
  showPageLoader,
  hidePageLoader
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PacientListComponent);
