import _ from 'lodash';
import { connect } from 'react-redux';
import { withHandlers, compose, lifecycle } from 'recompose';

import { getPacients } from '../../Pacient/pacient.actions';
import { getDoctors } from '../../Doctors/doctors.actions';
import { getSurgeryTypes, createSurgery } from '../surgeries.actions';

import SurgeryForm from '../components/surgery.form.component';

import * as WebAPI from '../../../utils/webAPI';
import * as Alert from '../../../components/Alerts';

import {
  pageStartLoadingAction,
  pageStopLoadingAction
} from '../../../containers/layouts/actions';

const mapStateToProps = ({ doctors, pacients, surgeries }) => ({
  surgeryTypes : _.values(surgeries.surgeryTypes),
  pacients     : _.values(pacients.pacients),
  doctors      : _.values(doctors.doctors)
});

const mapDispatchToProps = {
  createSurgery,
  getSurgeryTypes,
  getPacients,
  getDoctors,
  pageStartLoadingAction,
  pageStopLoadingAction
};

const onExamFormSubmit = props => async (values, form) => {
  try {
    const { data: surgery } = await WebAPI.createSurgery(values);
    props.createSurgery(surgery);

    Alert.success({
      content : 'Agendamento realizado com sucesso',
      onOk    : () => form.resetFields()
    });
  } catch (error) {
    Alert.error({
      content: 'Aconteceu um erro com o agendamento. Tente mais tarde!'
    });
  }
};

const withFormHandlers = withHandlers({
  onSubmitHandler: onExamFormSubmit
});

const withLifeCycle = lifecycle({
  async componentDidMount() {
    this.props.pageStartLoadingAction();
    const response = await Promise.all([
      WebAPI.getSurgeryTypes(),
      WebAPI.getPacients(),
      WebAPI.getDoctors(),
    ]);

    this.props.getSurgeryTypes(response[0]);
    this.props.getPacients(response[1]);
    this.props.getDoctors(response[2]);
    this.props.pageStopLoadingAction();
  }
});

const SurgeryContainerWrapper = compose(
  withLifeCycle,
  withFormHandlers
)(SurgeryForm);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SurgeryContainerWrapper);