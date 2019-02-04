import { connect } from 'react-redux';
import _ from 'lodash';
import { SurgeryTypeList } from '../components';
import { getSurgeryTypes, createSurgeryType } from '../surgery-types.actions';
import {
  pageStartLoadingAction,
  pageStopLoadingAction
} from '../../../containers/layouts/actions';

const mapStateToProps = ({ surgeryTypes }) => ({
  surgeryTypes: _.values(surgeryTypes.surgeryTypes),
});

const mapDispatchToProps = {
  getSurgeryTypes,
  createSurgeryType,
  pageStartLoadingAction,
  pageStopLoadingAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SurgeryTypeList);
