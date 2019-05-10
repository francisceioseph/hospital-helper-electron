import { connect } from 'react-redux';
import _ from 'lodash';
import { SurgeryTypeList } from '../components';
import {
  getSurgeryTypes, createSurgeryType, filterByName, showSurgeryTypeModal
} from '../surgery-types.actions';
import { showPageLoader, hidePageLoader } from '../../../containers/layouts/actions';

const mapStateToProps = ({ surgeryTypes }) => ({
  surgeryTypes : _.values(surgeryTypes.surgeryTypes),
  visible      : surgeryTypes.showSurgeryTypeModal
});

const mapDispatchToProps = {
  getSurgeryTypes,
  createSurgeryType,
  filterByName,
  showPageLoader,
  hidePageLoader,
  showSurgeryTypeModal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SurgeryTypeList);
