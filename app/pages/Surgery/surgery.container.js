import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import _ from 'lodash';
import moment from 'moment';

import { createSurgery, getSurgeries } from './surgery.actions';
import { SurgeryListComponent } from './components';

import { 
  pageStartLoadingAction,
  pageStopLoadingAction
} from '../../containers/layouts/actions';

import * as WebAPI from '../../utils/webAPI';


const normalizeAppointmentList = appointments => _.chain(appointments)
  .values()
  .map(appointment => ({
    title : `Cirurgia - ${appointment.pacient.full_name}`,
    start : moment(appointment.scheduled_to).toDate(),
    end   : moment(appointment.scheduled_to)
      .add(1, 'hour')
      .toDate(),
    resource: appointment
  }))
  .value();

const mapStateToProps = ({ surgeries }) => ({
  surgeries: normalizeAppointmentList(surgeries.surgeries)
});

const mapDispatchToProps = {
  createSurgery,
  getSurgeries,
  pageStartLoadingAction,
  pageStopLoadingAction
};

const withLifecycle = lifecycle({
  async componentDidMount() {
    this.props.pageStartLoadingAction();

    try {
      const response = await WebAPI.getSurgeris();
      this.props.getSurgeries(response.data);

      this.props.pageStopLoadingAction();
    } catch (error) {
      console.log(error);
      this.props.pageStopLoadingAction();
    }
  }
});

const SurgeryListWrapper = compose(
  withLifecycle,
)(SurgeryListComponent);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SurgeryListWrapper);
