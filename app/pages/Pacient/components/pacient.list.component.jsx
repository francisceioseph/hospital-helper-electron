// @flow
import * as React from 'react';
import {
  Row, Input, Divider, Table, Button, Col
} from 'antd';
import { compose, lifecycle, withHandlers } from 'recompose';

import { tableColumns } from '../pacient.constants';
import { PacientModalFormContainer } from '../../../containers/Pacient';

import * as WebAPI from '../../../utils/api.service';

type Props = {
  showPacientEditModal: boolean,
  pacients: Array<Object>,
  handleOnSearch: Function,
  onNewPacientClick: Function,
  hideEditPacientModal: Function
};

const withLifecycle = lifecycle({
  async componentDidMount() {
    this.props.showPageLoader();
    try {
      const response = await WebAPI.getPacients();
      this.props.getPacients(response);
      this.props.hidePageLoader();
    } catch (error) {
      this.props.hidePageLoader();
    }
  }
});

const onNewPacientClick = (props: Props) => () => props.history.push('/usuarios/pacientes/novo');
const handleOnSearch = (props: Props) => text => props.filterByName(text);

const hideEditPacientModal = (props: Props) => () => {
  props.hideEditModal();
};

const withListHandlers = withHandlers({
  onNewPacientClick,
  handleOnSearch,
  hideEditPacientModal
});

const PacientListComponent = (props: Props) => (
  <div>
    <Row type="flex" justify="space-between">
      <Col>
        <Input.Search placeholder="Pesquisar" style={{ width: 200 }} onSearch={props.handleOnSearch} />
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

    <PacientModalFormContainer
      titleText="Editar Paciente"
      mode="edit"
      visible={props.showPacientEditModal}
      onCancel={props.hideEditPacientModal}
      onSubmitSuccess={props.hideEditPacientModal}
    />
  </div>
);

export default compose(
  withLifecycle,
  withListHandlers
)(PacientListComponent);
