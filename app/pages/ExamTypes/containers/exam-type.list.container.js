import { connect } from 'react-redux';
import _ from 'lodash';
import { ExamTypeList } from '../components';
import { getExamTypes, createExamType } from '../exam-types.actions';

import { 
  pageStartLoadingAction,
  pageStopLoadingAction
} from '../../../containers/layouts/actions';

const mapStateToProps = ({ examTypes }) => ({
  examTypes: _.values(examTypes.examTypes),
});

const mapDispatchToProps = {
  getExamTypes,
  createExamType,
  pageStartLoadingAction,
  pageStopLoadingAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExamTypeList);
