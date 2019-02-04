import { connect } from 'react-redux';
import _ from 'lodash';
import { SpecialtyComponent } from '../components';
import { getSpecialties, createSpecialty } from '../specialty.actions';
import { 
  showPageLoader,
  hidePageLoader
} from '../../../containers/layouts/actions';

const mapStateToProps = ({ specialties }) => ({
  specialties: _.values(specialties.specialties)
});

const mapDispatchToProps = {
  getSpecialties,
  createSpecialty,
  showPageLoader,
  hidePageLoader,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpecialtyComponent);
