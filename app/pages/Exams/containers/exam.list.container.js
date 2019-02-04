import _ from 'lodash';
import moment from 'moment';

import { connect } from 'react-redux';
import { getExams } from '../exams.actions';
import { ExamListComponent } from '../components';
import { 
  showPageLoader,
  hidePageLoader
} from '../../../containers/layouts/actions';

const normalizeExamList = exams =>
  _.chain(exams)
    .values()
    .map(exam => ({
      title: `Exame - ${exam.pacient_name}`,
      start: moment(exam.scheduled_to).toDate(),
      end: moment(exam.scheduled_to)
        .add(1, 'hour')
        .toDate(),
      resource: exam
    }))
    .value();

const mapStateToProps = ({ exams }) => ({
  exams: normalizeExamList(exams.exams)
});

const mapDispatchToProps = {
  getExams,
  showPageLoader,
  hidePageLoader,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExamListComponent);
