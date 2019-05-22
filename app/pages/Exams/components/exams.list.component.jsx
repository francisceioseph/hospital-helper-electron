import React from 'react';
import PropTypes from 'prop-types';

import { compose, withHandlers, lifecycle } from 'recompose';
import {
  Row, Divider, Button, Col, Modal
} from 'antd';

import SugestSelector from '../../../components/forms/SugestSelector';
import Agenda from '../../../components/Agenda';
import ExamDetailList from './detail.component';
import * as WebAPI from '../../../utils/api.service';

const ExamComponent = (props) => {
  const { history, exams } = props;

  return (
    <div>
      <Row type="flex" justify="space-between">
        <Col>
          <SugestSelector
            options={props.examTypes}
            valueName="id"
            labelName="exam_type_name"
            idName="id"
            onChange={props.onSelectExamType}
            style={{ width: 300 }}
            placeholder="Selecione um Tipo de Exame"
          />
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
  exams            : PropTypes.instanceOf(Array).isRequired,
  examTypes        : PropTypes.instanceOf(Array).isRequired,
  history          : PropTypes.instanceOf(Object).isRequired,
  onSelectEvent    : PropTypes.func.isRequired,
  onSelectSlot     : PropTypes.func.isRequired,
  onSelectExamType : PropTypes.func.isRequired
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

const onSelectExamType = props => async (examTypeId) => {
  props.showPageLoader();
  try {
    const res = await WebAPI.getExams(examTypeId);
    props.getExams(res);
  } catch (error) {
    console.log(error);
  } finally {
    props.hidePageLoader();
  }
};

const withListHandlers = withHandlers({
  onSelectEvent,
  onSelectSlot,
  onSelectExamType
});

const examListLifecycle = lifecycle({
  async componentWillMount() {
    this.props.showPageLoader();
    try {
      const response = await WebAPI.getExamTypes();
      this.props.getExamTypes(response);
      this.props.getExams({ data: [] });

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
