import { connect } from 'react-redux';
import _ from 'lodash';
import { ExamTypeList } from '../components';
import {
  getExamTypes, createExamType, filterByName, showExamTypeModal
} from '../exam-types.actions';

import { showPageLoader, hidePageLoader } from '../../../containers/layouts/actions';

const mapStateToProps = ({ examTypes }) => ({
  examTypes : _.values(examTypes.examTypes),
  visible   : examTypes.showExamTypeModal
});

const mapDispatchToProps = {
  getExamTypes,
  createExamType,
  filterByName,
  showPageLoader,
  hidePageLoader,
  showExamTypeModal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExamTypeList);
