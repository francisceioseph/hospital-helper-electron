import React from 'react';
import { compose, lifecycle } from 'recompose';
import { Row, Input, Divider, Button, Col } from 'antd';
import Agenda from '../../../components/Agenda';

const AppointmentList = props => {
  return (
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
        <Agenda events={props.appointments} />
      </Row>
    </div>
  );
};

const withLifecycle = lifecycle({
  componentDidMount() {
    this.props.getAppointments();
  }
});

export default compose(withLifecycle)(AppointmentList);
