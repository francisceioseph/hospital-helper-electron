import React from 'react';
import PropTypes from 'prop-types';

import { compose, lifecycle, withHandlers } from 'recompose';
import {
  Row, Input, Divider, Table, Button, Col
} from 'antd';

import * as WebAPI from '../../../utils/api.service';
import { ExamTypeModalContainer } from '../../../containers/ExamType';

import { tableColumns } from './exam-type.list.constants';

const ExamTypeList = props => (
  <div>
    <Row type="flex" justify="space-between">
      <Col>
        <Input.Search onSearch={props.handleOnSearch} placeholder="Pesquisar" style={{ width: 200 }} />
      </Col>
      <Col>
        <Button type="primary" onClick={props.showExamTypeModal}>
          Novo Tipo de Exame
        </Button>
      </Col>
    </Row>

    <Divider />

    <Row>
      <Table
        size="middle"
        columns={tableColumns}
        dataSource={props.examTypes}
        rowKey={it => it.id}
        pagination={{ pageSize: 8 }}
      />
    </Row>

    <div>
      <ExamTypeModalContainer />
    </div>
  </div>
);

ExamTypeList.propTypes = {
  handleOnSearch    : PropTypes.func.isRequired,
  showExamTypeModal : PropTypes.func.isRequired,
  examTypes         : PropTypes.instanceOf(Array).isRequired
};

const handleOnSearch = props => text => props.filterByName(text);

const withListHandlers = withHandlers({
  handleOnSearch
});

const withListLifecycle = lifecycle({
  async componentDidMount() {
    this.props.showPageLoader();

    try {
      const response = await WebAPI.getExamTypes();
      this.props.getExamTypes(response);
      this.props.hidePageLoader();
    } catch (error) {
      this.props.hidePageLoader();
    }
  }
});

export default compose(
  withListHandlers,
  withListLifecycle
)(ExamTypeList);
