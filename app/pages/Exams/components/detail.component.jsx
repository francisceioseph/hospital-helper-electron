/* eslint-disable no-undef */
import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import { List, Button } from 'antd';
import { withHandlers, compose } from 'recompose';

import { DATE_FORMAT_PT_BR } from '../../../utils/date-format';
import { printPdf } from '../../../utils/print-pdf';
import { history } from '../../../store';

import * as WebAPI from '../../../utils/api.service';
import * as Alert from '../../../components/Alerts';

import './detail.component.less';

const { Item } = List;

const showAppointmentPDF = async (appointment) => {
  try {
    // const { data } = await WebAPI.getPdfFile(appointment.receipt_url);
    // printPdf(data);
  } catch (error) {
    Alert.error({
      content: 'Não foi possível acessar o arquivo PDF'
    });
  }
};

const rescheduleAppointment = props => (event) => {
  event.preventDefault();
  props.selectAppointment(props.appointment.id);
  history.push('/marcacoes/exames/novo');
  props.modal.destroy();
};

const withEventHandlers = withHandlers({
  handleRescheduleAppointment: rescheduleAppointment
});

const ExamDetailList = ({ appointment, handleRescheduleAppointment }) => (
  <div>
    <List size="small" bordered>
      <Item>
        <Item.Meta title="Paciente" />
        <b>{appointment.pacient.full_name}</b>
      </Item>
      <Item>
        <Item.Meta title="Médico Responsável" />
        <b>{appointment.doctor.full_name}</b>
      </Item>
      <Item>
        <Item.Meta title="Tipo de Atendimento" />
        <b>{appointment.exam_type.exam_type_name}</b>
      </Item>
      <Item>
        <Item.Meta title="Horário Marcado" />
        <b>{moment(appointment.scheduled_to).format(DATE_FORMAT_PT_BR)}</b>
      </Item>
    </List>

    <Button block type="primary" onClick={() => showAppointmentPDF(appointment)} style={{ marginTop: 16 }}>
      Imprimir Comprovante
    </Button>

    <Button block type="danger" onClick={handleRescheduleAppointment} style={{ marginTop: 16 }}>
      Remarcar Exame
    </Button>
  </div>
);

ExamDetailList.propTypes = {
  handleRescheduleAppointment : PropTypes.func.isRequired,
  appointment                 : PropTypes.instanceOf(Object).isRequired
};

export default compose(withEventHandlers)(ExamDetailList);
