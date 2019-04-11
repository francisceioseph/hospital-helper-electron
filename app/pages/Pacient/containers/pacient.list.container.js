import { connect } from 'react-redux';
import _ from 'lodash';

import {
  getPacients, filterByName, showEditModal, hideEditModal
} from '../pacient.actions';
import { PacientListComponent } from '../components';
import { showPageLoader, hidePageLoader } from '../../../containers/layouts/actions';

const mapStateToProps = ({ pacients }) => ({
  pacients             : _.values(pacients.pacients),
  showPacientEditModal : pacients.showPacientEditModal,
  pacient              : pacients.pacient
});

const mapDispatchToProps = {
  getPacients,
  filterByName,
  showPageLoader,
  hidePageLoader,
  showEditModal,
  hideEditModal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PacientListComponent);
