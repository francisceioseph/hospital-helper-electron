import _ from 'lodash';
import moment from 'moment';
import { connect } from 'react-redux';

import { getSurgeries } from '../surgeries.actions';

import SurgeryListComponent from '../components/surgeries.list.component';

import { 
  pageStartLoadingAction,
  pageStopLoadingAction
} from '../../../containers/layouts/actions';

const normalizeExamList = surgeries => _.chain(surgeries)
  .values()
  .map(surgery => ({
    title : `Cirurgia - ${surgery.pacient_name}`,
    start : moment(surgery.scheduled_to).toDate(),
    end   : moment(surgery.scheduled_to)
      .add(1, 'hour')
      .toDate(),
    resource: surgery
  }))
  .value();

const mapStateToProps = ({ surgeries }) => ({
  surgeries: normalizeExamList(surgeries.surgeries)
});

const mapDispatchToProps = {
  getSurgeries,
  pageStartLoadingAction,
  pageStopLoadingAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SurgeryListComponent);