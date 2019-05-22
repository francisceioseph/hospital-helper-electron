import _ from 'lodash';
import { connect } from 'react-redux';
import { withHandlers, compose, lifecycle } from 'recompose';

import { getPacients } from '../../Pacient/pacient.actions';
import { getDoctors } from '../../Doctors/doctors.actions';
import { getSurgeryTypes, createSurgery } from '../surgeries.actions';
import { printPdf } from '../../../utils/print-pdf';

import SurgeryForm from '../components/surgery.form.component';

import * as WebAPI from '../../../utils/api.service';
import * as Alert from '../../../components/Alerts';

import { showPageLoader, hidePageLoader } from '../../../containers/layouts/actions';

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
  showPageLoader,
  hidePageLoader
};

const showAppointmentPDF = async (appointment, form) => {
  try {
    const { data } = await WebAPI.getPdfFile(appointment.receipt_url);
    printPdf(data);
    form.resetFields();
  } catch (error) {
    Alert.error({
      content : 'Não foi possível acessar o arquivo PDF',
      onOk    : () => form.resetFields()
    });
  }
};

const onSurgeryFormSubmit = props => async (values, form) => {
  try {
    const { data: surgery } = await WebAPI.createSurgery(values);
    props.createSurgery(surgery);

    Alert.success({
      content    : 'Agendamento realizado com sucesso. Deseja imprimir comprovante?',
      okText     : 'Sim',
      cancelText : 'Não',
      onOk       : () => showAppointmentPDF(surgery, form),
      onCancel   : () => form.resetFields()
    });
  } catch (error) {
    Alert.error({
      content: 'Aconteceu um erro com o agendamento. Tente mais tarde!'
    });
  }
};

const withFormHandlers = withHandlers({
  onSubmitHandler: onSurgeryFormSubmit
});

const withLifeCycle = lifecycle({
  async componentDidMount() {
    this.props.showPageLoader();
    const response = await Promise.all([WebAPI.getSurgeryTypes(), WebAPI.getPacients(), WebAPI.getDoctors()]);

    this.props.getSurgeryTypes(response[0]);
    this.props.getPacients(response[1]);
    this.props.getDoctors(response[2]);
    this.props.hidePageLoader();
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
