import { connect } from 'react-redux';
import _ from 'lodash';
import { SurgeryTypeList } from '../components';
import { getSurgeryTypes, createSurgeryType, filterByName } from '../surgery-types.actions';
import { showPageLoader, hidePageLoader } from '../../../containers/layouts/actions';

const mapStateToProps = ({ surgeryTypes }) => ({
  surgeryTypes: _.values(surgeryTypes.surgeryTypes)
});

const mapDispatchToProps = {
  getSurgeryTypes,
  createSurgeryType,
  filterByName,
  showPageLoader,
  hidePageLoader
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SurgeryTypeList);
