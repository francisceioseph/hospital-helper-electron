import { connect } from 'react-redux';
import _ from 'lodash';
import { SpecialtyComponent } from '../components';
import {
  getSpecialties, createSpecialty, applySpecialtyFilter, showSpecialtyModal
} from '../specialty.actions';
import { showPageLoader, hidePageLoader } from '../../../containers/layouts/actions';

const mapStateToProps = ({ specialties }) => ({
  specialties : _.values(specialties.specialties),
  visible     : specialties.showSpecialtyModal
});

const mapDispatchToProps = {
  getSpecialties,
  createSpecialty,
  showPageLoader,
  hidePageLoader,
  applySpecialtyFilter,
  showSpecialtyModal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpecialtyComponent);
