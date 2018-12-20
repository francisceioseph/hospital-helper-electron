import React from 'react';
import PropTypes from 'prop-types';
import { Row, Input, Divider, Button, Col } from 'antd';
import Agenda from '../../../components/Agenda';

class SurgeryComponent extends React.Component {
  render() {
    const { history } = this.props;

    return (
      <div>
        <Row type="flex" justify="space-between">
          <Col>
            <Input.Search placeholder="Pesquisar" style={{ width: 200 }} />
          </Col>
          <Col>
            <Button
              type="primary"
              onClick={() => history.push('/marcacoes/consultas/novo')}
            >
              Agendar Cirurgia
            </Button>
          </Col>
        </Row>

        <Divider />

        <Row>
          <Agenda events={this.props.surgeries} />
        </Row>
      </div>
    );
  }
}

SurgeryComponent.propTypes = {
  specialties: PropTypes.instanceOf(Array)
};

SurgeryComponent.defaultProps = {
  specialties: []
};

export default SurgeryComponent;
