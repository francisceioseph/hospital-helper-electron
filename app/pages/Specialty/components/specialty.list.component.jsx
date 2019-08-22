// @flow
import React from 'react';

import { compose, lifecycle, withHandlers } from 'recompose';
import {
  Row, Input, Divider, Table, Button, Col
} from 'antd';

import * as ipcService from '../../../utils/ipc.service';
import { SpecialtyModalContainer } from '../../../containers/Specialty';

import { tableColumns } from './specialty.list.constants';

type Props = {
  handleOnSearch: Function,
  showSpecialtyModal: Function,
  specialties: Array<Object>
};

const SpecialtyComponent = (props: Props) => (
  <div>
    <Row type="flex" justify="space-between">
      <Col>
        <Input.Search onSearch={props.handleOnSearch} placeholder="Pesquisar" style={{ width: 200 }} />
      </Col>
      <Col>
        <Button type="primary" onClick={props.showSpecialtyModal}>
          Nova Clínica
        </Button>
      </Col>
    </Row>

    <Divider />

    <Row>
      <Table
        size="middle"
        columns={tableColumns}
        dataSource={props.specialties}
        rowKey={it => it.id}
        pagination={{ pageSize: 8 }}
      />
    </Row>

    <div>
      <SpecialtyModalContainer />
    </div>
  </div>
);

const handleOnSearch = props => (value) => {
  props.applySpecialtyFilter(value);
};

const withListHandlers = withHandlers({
  handleOnSearch
});

const specialtyListLifecycle = lifecycle({
  async componentDidMount() {
    this.props.showPageLoader();

    try {
      const response = await ipcService.getSpecialties();
      this.props.getSpecialties(response);
      this.props.hidePageLoader();
    } catch (error) {
      console.log(error);
      this.props.hidePageLoader();
    }
  }
});

export default compose(
  withListHandlers,
  specialtyListLifecycle
)(SpecialtyComponent);
