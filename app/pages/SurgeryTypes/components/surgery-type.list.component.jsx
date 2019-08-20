import React from 'react';
import PropTypes from 'prop-types';

import { compose, lifecycle, withHandlers } from 'recompose';
import {
  Row, Input, Divider, Table, Button, Col
} from 'antd';

import * as ipcService from '../../../utils/ipc.service';
import { SurgeryTypeModalContainer } from '../../../containers/SurgeryType';

import { tableColumns } from './surgery-type.list.constants';
import * as Alert from '../../../components/Alerts';

const SurgeryTypeList = props => (
  <div>
    <Row type="flex" justify="space-between">
      <Col>
        <Input.Search onSearch={props.onSearch} placeholder="Pesquisar" style={{ width: 200 }} />
      </Col>
      <Col>
        <Button type="primary" onClick={props.showSurgeryTypeModal}>
          Novo Tipo de Cirurgia
        </Button>
      </Col>
    </Row>

    <Divider />

    <Row>
      <Table
        size="middle"
        columns={tableColumns}
        dataSource={props.surgeryTypes}
        rowKey={it => it.id}
        pagination={{ pageSize: 8 }}
      />
    </Row>

    <div>
      <SurgeryTypeModalContainer />
    </div>
  </div>
);

SurgeryTypeList.propTypes = {
  onSearch             : PropTypes.func.isRequired,
  showSurgeryTypeModal : PropTypes.func.isRequired,
  surgeryTypes         : PropTypes.instanceOf(Array).isRequired
};

const handleOnSearch = props => text => props.filterByName(text);

const withListHandlers = withHandlers({
  onSearch: handleOnSearch
});

const withListLifecycle = lifecycle({
  async componentDidMount() {
    try {
      this.props.showPageLoader();
      const response = await ipcService.getSurgeryTypes();
      this.props.getSurgeryTypes(response);
      this.props.hidePageLoader();
    } catch (error) {
      console.log(error);
      this.props.hidePageLoader();

      Alert.error({
        content: 'Aconteceu um erro no carregamento. Tente mais tarde!'
      });
    }
  }
});

export default compose(
  withListHandlers,
  withListLifecycle
)(SurgeryTypeList);
