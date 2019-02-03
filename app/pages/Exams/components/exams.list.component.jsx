import React from 'react';
import PropTypes from 'prop-types';

import { compose, withHandlers, lifecycle } from 'recompose';
import { Row, Input, Divider, Button, Col, Modal } from 'antd';

import Agenda from '../../../components/Agenda';
import ExamDetailList from './detail.component';

const ExamComponent = props => {
  const { history, exams } = props;

  return (
    <div>
      <Row type="flex" justify="space-between">
        <Col>
          <Input.Search placeholder="Pesquisar" style={{ width: 200 }} />
        </Col>
        <Col>
          <Button
            type="primary"
            onClick={() => history.push('/marcacoes/exames/novo')}
          >
            Agendar Exame
          </Button>
        </Col>
      </Row>

      <Divider />

      <Row>
        <Agenda events={exams} onSelectEvent={props.onSelectEvent} />
      </Row>
    </div>
  );
};

ExamComponent.propTypes = {
  exams: PropTypes.instanceOf(Object).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
  onSelectEvent: PropTypes.func.isRequired
};

const onAppointmentSelected = () => event => {
  Modal.info({
    title: 'Agendamento',
    content: <ExamDetailList appointment={event.resource} />
  });
};

const withListHandlers = withHandlers({
  onSelectEvent: onAppointmentSelected
});

const examListLifecycle = lifecycle({
  componentWillMount() {
    this.props.getExams();
  }
});

export default compose(
  withListHandlers,
  examListLifecycle
)(ExamComponent);