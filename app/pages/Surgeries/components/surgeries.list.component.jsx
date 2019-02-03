import React from 'react';
import PropTypes from 'prop-types';

import { compose, withHandlers, lifecycle } from 'recompose';
import {
  Row, Input, Divider, Button, Col, Modal
} from 'antd';

import * as WebAPI from '../../../utils/webAPI';
import Agenda from '../../../components/Agenda';
import SurgeryDetailList from './detail.component';

const SurgeriesListComponent = (props) => {
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
            onClick={() => history.push('/marcacoes/cirurgias/novo')}
          >
            Agendar Cirurgia
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

SurgeriesListComponent.propTypes = {
  exams         : PropTypes.instanceOf(Object).isRequired,
  history       : PropTypes.instanceOf(Object).isRequired,
  onSelectEvent : PropTypes.func.isRequired
};

const withLifecycle = lifecycle({
  async componentDidMount() {
    this.props.pageStartLoadingAction();

    try {
      const respose = await WebAPI.getSurgeries();
      this.props.getSurgeries(respose);
      this.props.pageStopLoadingAction();
    } catch (error) {
      console.log(error);
      this.props.pageStopLoadingAction()
    }
  }
});

const onAppointmentSelected = () => (event) => {
  Modal.info({
    title   : 'Agendamento',
    content : <SurgeryDetailList appointment={event.resource} />
  });
};

const withListHandlers = withHandlers({
  onSelectEvent: onAppointmentSelected
});

export default compose(
  withLifecycle,
  withListHandlers,
)(SurgeriesListComponent);
