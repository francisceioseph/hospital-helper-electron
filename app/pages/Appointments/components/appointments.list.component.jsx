import React from 'react';
import PropTypes from 'prop-types';

import { compose, lifecycle, withHandlers } from 'recompose';
import { Row, Input, Divider, Button, Col, Modal } from 'antd';

import Agenda from '../../../components/Agenda';
import AppointmentInfo from './detail.component';
import * as WebAPI from '../../../utils/webAPI';

const AppointmentList = props => (
  <div>
    <Row type="flex" justify="space-between">
      <Col>
        <Input.Search placeholder="Pesquisar" style={{ width: 200 }} />
      </Col>
      <Col>
        <Button
          type="primary"
          onClick={() => props.history.push('/marcacoes/consultas/novo')}
        >
          Agendar Consulta
        </Button>
      </Col>
    </Row>

    <Divider />

    <Row>
      <Agenda events={props.appointments} onSelectEvent={props.onSelectEvent} />
    </Row>
  </div>
);

AppointmentList.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
  appointments: PropTypes.instanceOf(Array).isRequired,
  onSelectEvent: PropTypes.func.isRequired
};

const onAppointmentSelected = () => event => {
  Modal.info({
    title: 'Agendamento',
    content: <AppointmentInfo appointment={event.resource} />
  });
};

const withListHandlers = withHandlers({
  onSelectEvent: onAppointmentSelected
});

const withLifecycle = lifecycle({
  async componentDidMount() {
    try {
      const res = await WebAPI.getAppointments();
      this.props.getAppointments(res);
    } catch(error) {
      console.log(error);
    }
  }
});

export default compose(
  withLifecycle,
  withListHandlers
)(AppointmentList);
