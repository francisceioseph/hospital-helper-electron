// @flow
import { connect } from 'react-redux';

import { PacientListActionsComponent } from '../../../components/Pacient';
import { removePacient, selectPacient, showEditModal } from '../../../pages/Pacient/pacient.actions';

const mapDispatchToProps = {
  removePacient,
  selectPacient,
  showEditModal
};

export default connect(
  null,
  mapDispatchToProps
)(PacientListActionsComponent);
