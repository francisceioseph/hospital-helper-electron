import { connect } from 'react-redux';
import _ from 'lodash';
import { ExamTypeList } from '../components';
import { getExamTypes, createExamType } from '../exam-types.actions';

const mapStateToProps = ({ examTypes }) => ({
  examTypes: _.values(examTypes.examTypes),
});

const mapDispatchToProps = {
  getExamTypes,
  createExamType,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExamTypeList);
