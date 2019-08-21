/* eslint-disable no-undef */
import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import { List, Button } from 'antd';
import { DATE_FORMAT_PT_BR } from '../../../utils/date-format';
import { printPdf } from '../../../utils/print-pdf';

// import * as WebAPI from '../../../utils/api.service';
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

const ExamDetailList = ({ appointment }) => (
  <div>
    <List size="small" bordered>
      <Item>
        <Item.Meta title="Paciente" />
        <b>{appointment.pacient.personal_datum.full_name}</b>
      </Item>
      <Item>
        <Item.Meta title="Médico Responsável" />
        <b>{appointment.doctor.personal_datum.full_name}</b>
      </Item>
      <Item>
        <Item.Meta title="Tipo de Cirurgia" />
        <b>{appointment.surgery_type.surgery_type_name}</b>
      </Item>
      <Item>
        <Item.Meta title="Horário Marcado" />
        <b>{moment(appointment.scheduled_to).format(DATE_FORMAT_PT_BR)}</b>
      </Item>
    </List>
    <Button block type="primary" onClick={() => showAppointmentPDF(appointment)} style={{ marginTop: 16 }}>
      Imprimir Comprovante
    </Button>
  </div>
);

ExamDetailList.propTypes = {
  appointment: PropTypes.instanceOf(Object).isRequired
};

export default ExamDetailList;
