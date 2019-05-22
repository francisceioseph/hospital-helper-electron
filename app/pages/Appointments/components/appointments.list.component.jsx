import React from 'react';
import PropTypes from 'prop-types';

import { compose, lifecycle, withHandlers } from 'recompose';
import {
  Row, Divider, Button, Col, Modal
} from 'antd';

import SugestSelector from '../../../components/forms/SugestSelector';
import Agenda from '../../../components/Agenda';
import AppointmentInfo from './detail.component';
import * as WebAPI from '../../../utils/api.service';

const AppointmentList = props => (
  <div>
    <Row type="flex" justify="space-between">
      <Col>
        <SugestSelector
          options={props.doctors}
          valueName="id"
          labelName="personal_datum.full_name"
          idName="id"
          onChange={props.onSelectDoctor}
          style={{ width: 300 }}
          placeholder="Selecione um Médico"
        />
      </Col>
      <Col>
        <Button type="primary" onClick={() => props.history.push('/marcacoes/consultas/novo')}>
          Agendar Consulta
        </Button>
      </Col>
    </Row>

    <Divider />

    <Row>
      <Agenda events={props.appointments} onSelectEvent={props.onSelectEvent} onSelectSlot={props.onSelectSlot} />
    </Row>
  </div>
);

AppointmentList.propTypes = {
  history        : PropTypes.instanceOf(Object).isRequired,
  appointments   : PropTypes.instanceOf(Array).isRequired,
  doctors        : PropTypes.instanceOf(Array).isRequired,
  onSelectEvent  : PropTypes.func.isRequired,
  onSelectSlot   : PropTypes.func.isRequired,
  onSelectDoctor : PropTypes.func.isRequired
};

const onSelectEvent = () => (event) => {
  Modal.info({
    title   : 'Agendamento',
    content : <AppointmentInfo appointment={event.resource} />
  });
};

const onSelectSlot = props => () => {
  Modal.confirm({
    title   : 'Atenção',
    content : 'Deseja realizar um agendamento?',
    onOk    : () => props.history.push('/marcacoes/consultas/novo')
  });
};

const onSelectDoctor = props => async (doctorId) => {
  props.showPageLoader();
  try {
    const res = await WebAPI.getAppointments(doctorId);
    props.getAppointments(res);
  } catch (error) {
    console.log(error);
  } finally {
    props.hidePageLoader();
  }
};

const withListHandlers = withHandlers({
  onSelectEvent,
  onSelectSlot,
  onSelectDoctor
});

const withLifecycle = lifecycle({
  async componentDidMount() {
    this.props.showPageLoader();
    try {
      const res = await WebAPI.getDoctors();
      this.props.getDoctors(res);
      this.props.getAppointments({ data: [] });
    } catch (error) {
      console.log(error);
    } finally {
      this.props.hidePageLoader();
    }
  }
});

export default compose(
  withLifecycle,
  withListHandlers
)(AppointmentList);
