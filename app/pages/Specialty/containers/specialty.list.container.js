import { connect } from 'react-redux';
import _ from 'lodash';
import { SpecialtyComponent } from '../components';
import { getSpecialties, createSpecialty } from '../specialty.actions';

const mapStateToProps = ({ specialties }) => ({
  specialties: _.values(specialties.specialties)
});

const mapDispatchToProps = {
  getSpecialties,
  createSpecialty
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpecialtyComponent);
