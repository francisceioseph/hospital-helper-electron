import { connect } from 'react-redux';
import _ from 'lodash';
import { SurgeryTypeList } from '../components';
import { getSurgeryTypes, createSurgeryType } from '../surgery-types.actions';
import {
  showPageLoader,
  hidePageLoader
} from '../../../containers/layouts/actions';

const mapStateToProps = ({ surgeryTypes }) => ({
  surgeryTypes: _.values(surgeryTypes.surgeryTypes),
});

const mapDispatchToProps = {
  getSurgeryTypes,
  createSurgeryType,
  showPageLoader,
  hidePageLoader,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SurgeryTypeList);
