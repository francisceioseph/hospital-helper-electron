import React from 'react';
import PropTypes from 'prop-types';
import { Row, Input, Divider, Button, Col } from 'antd';
import Agenda from '../../../components/Agenda';

const SurgeryComponent = (props) => {
  const { history, surgeries, onSelectEvent } = props;

  return (
    <div>
      <Row type="flex" justify="space-between">
        <Col>
          <Input.Search placeholder="Pesquisar" style={{ width: 200 }} />
        </Col>
        <Col>
          <Button
            type="primary"
            onClick={() => history.push('/marcacoes/cirurgias/novo')}
          >
            Agendar Cirurgia
          </Button>
        </Col>
      </Row>

      <Divider />

      <Row>
        <Agenda events={surgeries} onSelectEvent={onSelectEvent} />
      </Row>
    </div>
  );
};

SurgeryComponent.propTypes = {
  history       : PropTypes.instanceOf(Object).isRequired,
  surgeries     : PropTypes.instanceOf(Object).isRequired,
  onSelectEvent : PropTypes.func,
};

SurgeryComponent.defaultProps = {
  onSelectEvent: () => {}
};

export default SurgeryComponent;
