import { connect } from 'react-redux';
import _ from 'lodash';

import { getPacients } from '../pacient.actions';
import { PacientListComponent } from '../components';

const mapStateToProps = ({ pacients }) => ({
  pacients: _.values(pacients.pacients)
});

const mapDispatchToProps = {
  getPacients
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PacientListComponent);
