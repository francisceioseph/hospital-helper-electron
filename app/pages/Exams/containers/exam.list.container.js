import _ from 'lodash';
import moment from 'moment';

import { connect } from 'react-redux';
import { getExams, selectExam, clearExam } from '../exams.actions';
import { getExamTypes } from '../../ExamTypes/exam-types.actions';
import { ExamListComponent } from '../components';
import { showPageLoader, hidePageLoader } from '../../../containers/layouts/actions';

const normalizeExamList = exams => _.chain(exams)
  .values()
  .map(exam => ({
    title : `Exame - ${exam.pacient.personal_datum.full_name}`,
    start : moment(exam.scheduled_to).toDate(),
    end   : moment(exam.scheduled_to)
      .add(1, 'hour')
      .toDate(),
    resource: exam
  }))
  .value();

const mapStateToProps = ({ exams, examTypes }) => ({
  exams     : normalizeExamList(exams.exams),
  examTypes : _.values(examTypes.examTypes)
});

const mapDispatchToProps = {
  getExams,
  showPageLoader,
  hidePageLoader,
  getExamTypes,
  selectExam,
  clearExam
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExamListComponent);
