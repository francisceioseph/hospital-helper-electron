import React from 'react';
import PropTypes from 'prop-types';

import { compose, withHandlers, lifecycle } from 'recompose';
import {
  Row, Input, Divider, Button, Col, Modal
} from 'antd';

import Agenda from '../../../components/Agenda';
import ExamDetailList from './detail.component';
import * as WebAPI from '../../../utils/api.service';

const ExamComponent = (props) => {
  const { history, exams } = props;

  return (
    <div>
      <Row type="flex" justify="space-between">
        <Col>
          <Input.Search placeholder="Pesquisar" style={{ width: 200 }} />
        </Col>
        <Col>
          <Button type="primary" onClick={() => history.push('/marcacoes/exames/novo')}>
            Agendar Exame
          </Button>
        </Col>
      </Row>

      <Divider />

      <Row>
        <Agenda events={exams} onSelectEvent={props.onSelectEvent} onSelectSlot={props.onSelectSlot} />
      </Row>
    </div>
  );
};

ExamComponent.propTypes = {
  exams         : PropTypes.instanceOf(Object).isRequired,
  history       : PropTypes.instanceOf(Object).isRequired,
  onSelectEvent : PropTypes.func.isRequired,
  onSelectSlot  : PropTypes.func.isRequired
};

const onSelectEvent = () => (event) => {
  Modal.info({
    title   : 'Agendamento',
    content : <ExamDetailList appointment={event.resource} />
  });
};

const onSelectSlot = props => () => {
  Modal.confirm({
    title   : 'Atenção',
    content : 'Deseja realizar um agendamento?',
    onOk    : () => props.history.push('/marcacoes/exames/novo')
  });
};

const withListHandlers = withHandlers({
  onSelectEvent,
  onSelectSlot
});

const examListLifecycle = lifecycle({
  async componentWillMount() {
    this.props.showPageLoader();
    try {
      const response = await WebAPI.getExams();
      this.props.getExams(response);

      this.props.hidePageLoader();
    } catch (error) {
      this.props.hidePageLoader();
    }
  }
});

export default compose(
  withListHandlers,
  examListLifecycle
)(ExamComponent);
