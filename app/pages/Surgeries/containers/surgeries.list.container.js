import _ from 'lodash';
import moment from 'moment';
import { connect } from 'react-redux';

import { getSurgeries } from '../surgeries.actions';
import { getDoctors } from '../../Doctors/doctors.actions';

import SurgeryListComponent from '../components/surgeries.list.component';

import { showPageLoader, hidePageLoader } from '../../../containers/layouts/actions';

const normalizeSurgeryList = surgeries => _.chain(surgeries)
  .values()
  .map(surgery => ({
    title : `Cirurgia - ${surgery.pacient.personal_datum.full_name}`,
    start : moment(surgery.scheduled_to).toDate(),
    end   : moment(surgery.scheduled_to)
      .add(1, 'hour')
      .toDate(),
    resource: surgery
  }))
  .value();

const mapStateToProps = ({ surgeries, doctors }) => ({
  surgeries : normalizeSurgeryList(surgeries.surgeries),
  doctors   : _.values(doctors.doctors)
});

const mapDispatchToProps = {
  getSurgeries,
  showPageLoader,
  hidePageLoader,
  getDoctors
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SurgeryListComponent);
