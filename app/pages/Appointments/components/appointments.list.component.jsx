import React from 'react';
import PropTypes from 'prop-types';

import { compose, lifecycle, withHandlers } from 'recompose';
import {
  Row, Input, Divider, Button, Col, Modal
} from 'antd';

import Agenda from '../../../components/Agenda';
import AppointmentInfo from './detail.component';
import * as WebAPI from '../../../utils/api.service';

const AppointmentList = props => (
  <div>
    <Row type="flex" justify="space-between">
      <Col>
        <Input.Search placeholder="Pesquisar" style={{ width: 200 }} />
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
  history       : PropTypes.instanceOf(Object).isRequired,
  appointments  : PropTypes.instanceOf(Array).isRequired,
  onSelectEvent : PropTypes.func.isRequired,
  onSelectSlot  : PropTypes.func.isRequired
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

const withListHandlers = withHandlers({
  onSelectEvent,
  onSelectSlot
});

const withLifecycle = lifecycle({
  async componentDidMount() {
    this.props.showPageLoader();
    try {
      const res = await WebAPI.getAppointments();
      this.props.getAppointments(res);
      this.props.hidePageLoader();
    } catch (error) {
      console.log(error);
      this.props.hidePageLoader();
    }
  }
});

export default compose(
  withLifecycle,
  withListHandlers
)(AppointmentList);
