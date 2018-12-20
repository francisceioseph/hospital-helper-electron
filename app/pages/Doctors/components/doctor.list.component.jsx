import React from 'react';
import { lifecycle, compose } from 'recompose';
import { Row, Input, Divider, Table, Button, Col } from 'antd';

import { tableColumns } from './doctor.list.constants';

const DoctorListComponent = props => (
  <div>
    <Row type="flex" justify="space-between">
      <Col>
        <Input.Search placeholder="Pesquisar" style={{ width: 200 }} />
      </Col>
      <Col>
        <Button
          type="primary"
          onClick={() => props.history.push('/cadastros/medicos/novo')}
        >
          Novo Médico
        </Button>
      </Col>
    </Row>

    <Divider />

    <Row>
      <Table
        size="middle"
        columns={tableColumns}
        dataSource={props.doctors}
        rowKey={it => it.user_profile_id}
        pagination={{ pageSize: 8 }}
      />
    </Row>
  </div>
);

const listLifecycle = lifecycle({
  componentDidMount() {
    this.props.getDoctors();
  }
});

export default compose(listLifecycle)(DoctorListComponent);
