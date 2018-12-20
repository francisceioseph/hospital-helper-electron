import React from 'react';
import PropTypes from 'prop-types';
import { Row, Input, Divider, Table, Button } from 'antd';

const columns = [
  {
    title: 'Nome',
    dataIndex: 'nome',
    key: 'nome'
  }
];

class Prontuario extends React.Component {
  render() {
    return (
      <div>
        <Row type="flex" justify="space-between">
          <Input.Search placeholder="Pesquisar" style={{ width: 200 }} />
          <Button type="primary" onClick={() => {}}>
            Novo Prontuario
          </Button>
        </Row>

        <Divider />

        <Row>
          <Table
            size="middle"
            columns={columns}
            dataSource={this.props.prontuarios}
            rowKey={it => it.id}
            pagination={{ pageSize: 8 }}
          />
        </Row>
      </div>
    );
  }
}

Prontuario.propTypes = {
  prontuarios: PropTypes.instanceOf(Array)
};

Prontuario.defaultProps = {
  prontuarios: []
};

export default Prontuario;
