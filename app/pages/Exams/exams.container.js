import { connect } from 'react-redux';
import _ from 'lodash';

import { createExam } from './exams.actions';
import { ExamListComponent } from './components';

const mapStateToProps = ({ exams }) => ({
  exams: _.values(exams.exams)
});

const mapDispatchToProps = {
  createExam
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExamListComponent);
