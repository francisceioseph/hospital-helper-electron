import React from 'react';
import { Row, Input, Divider, Table, Button, Col } from 'antd';
import { compose, lifecycle, withHandlers } from 'recompose';

import { tableColumns } from '../pacient.constants';

const withLifecycle = lifecycle({
  componentDidMount() {
    this.props.getPacients();
  }
});

const withListHandlers = withHandlers({
  onNewPacientClick: props => () =>
    props.history.push('/usuarios/pacientes/novo')
});

const PacientListComponent = props => (
  <div>
    <Row type="flex" justify="space-between">
      <Col>
        <Input.Search placeholder="Pesquisar" style={{ width: 200 }} />
      </Col>
      <Col>
        <Button type="primary" onClick={props.onNewPacientClick}>
          Novo Paciente
        </Button>
      </Col>
    </Row>

    <Divider />

    <Row>
      <Table
        size="middle"
        columns={tableColumns}
        dataSource={props.pacients}
        rowKey={it => it.id}
        pagination={{ pageSize: 8 }}
      />
    </Row>
  </div>
);

export default compose(
  withLifecycle,
  withListHandlers
)(PacientListComponent);
