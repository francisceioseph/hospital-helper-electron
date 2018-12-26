import React from 'react';
import PropTypes from 'prop-types';

import { Row, Input, Divider, Table, Button, Col } from 'antd';

const TableList = props => (
  <div>
    <Row type="flex" justify="space-between">
      <Col>
        <Input.Search
          placeholder={props.searchPlaceholder}
          onSearch={props.onSearch}
          style={{ width: 200 }}
        />
      </Col>
      <Col>
        <Button type="primary" onClick={props.onButtonClick}>
          {props.buttonName}
        </Button>
      </Col>
    </Row>

    <Divider />

    <Row>
      <Table
        size="middle"
        columns={props.columns}
        dataSource={props.datasource}
        rowKey={it => it[props.idAccessor]}
        pagination={{ pageSize: props.pageSize }}
      />
    </Row>
  </div>
);

TableList.propTypes = {
  searchPlaceholder: PropTypes.string,
  buttonName: PropTypes.string,
  columns: PropTypes.instanceOf(Array),
  datasource: PropTypes.instanceOf(Array),
  onSearch: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  idAccessor: PropTypes.string.isRequired,
  pageSize: PropTypes.number
};

TableList.defaultProps = {
  buttonName: 'Novo',
  searchPlaceholder: 'Pesquisar',
  columns: [],
  datasource: [],
  pageSize: 8
};

export default TableList;
