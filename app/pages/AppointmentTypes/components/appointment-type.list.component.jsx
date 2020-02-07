import React from 'react';
import PropTypes from 'prop-types';

import {
  compose, lifecycle, withState, withHandlers
} from 'recompose';
import {
  Row, Input, Divider, Table, Button, Col
} from 'antd';

import * as ipcService from '../../../utils/ipc.service';
import { AppointmentTypeModalContainer } from '../../../containers/AppointmentType';

import { tableColumns } from './appointment-type.list.constants';

const AppointmentTypeList = props => (
  <div>
    <Row type="flex" justify="space-between">
      <Col>
        <Input.Search onSearch={props.onSearch} placeholder="Pesquisar" style={{ width: 200 }} />
      </Col>
      <Col>
        <Button type="primary" onClick={props.showAppointmentTypeModal}>
          Novo Tipo de Atendimento
        </Button>
      </Col>
    </Row>

    <Divider />

    <Row>
      <Table
        size="middle"
        columns={tableColumns}
        dataSource={props.appointmentTypes}
        rowKey={it => it.id}
        pagination={{ pageSize: 8 }}
      />
    </Row>

    <div>
      <AppointmentTypeModalContainer />
    </div>
  </div>
);

AppointmentTypeList.propTypes = {
  onSearch                 : PropTypes.func.isRequired,
  showAppointmentTypeModal : PropTypes.func.isRequired,
  appointmentTypes         : PropTypes.instanceOf(Array).isRequired
};

const withVisibleState = withState('visible', 'setVisible', false);
const handleOnSeach = props => text => props.applyAppointmentTypesFilter(text);

const withListHandlers = withHandlers({
  onSearch: handleOnSeach
});

const withListLifecycle = lifecycle({
  async componentDidMount() {
    this.props.showPageLoader();

    try {
      const response = await ipcService.getAppointmentTypes();
      this.props.getAppointmentTypes(response);
      this.props.hidePageLoader();
    } catch (error) {
      console.log(error);
      this.props.hidePageLoader();
    }
  }
});

export default compose(
  withVisibleState,
  withListHandlers,
  withListLifecycle
)(AppointmentTypeList);
