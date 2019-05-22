import React from 'react';
import PropTypes from 'prop-types';

import { compose, withHandlers, lifecycle } from 'recompose';
import {
  Row, Divider, Button, Col, Modal
} from 'antd';

import * as WebAPI from '../../../utils/api.service';

import SugestSelector from '../../../components/forms/SugestSelector';
import Agenda from '../../../components/Agenda';
import SurgeryDetailList from './detail.component';

const SurgeriesListComponent = (props) => {
  const { history, surgeries } = props;

  return (
    <div>
      <Row type="flex" justify="space-between">
        <Col>
          <SugestSelector
            options={props.doctors}
            valueName="id"
            labelName="personal_datum.full_name"
            idName="id"
            onChange={props.onSelectDoctor}
            style={{ width: 300 }}
            placeholder="Selecione um Médico"
          />
        </Col>
        <Col>
          <Button type="primary" onClick={() => history.push('/marcacoes/cirurgias/novo')}>
            Agendar Cirurgia
          </Button>
        </Col>
      </Row>

      <Divider />

      <Row>
        <Agenda events={surgeries} onSelectEvent={props.onSelectEvent} onSelectSlot={props.onSelectSlot} />
      </Row>
    </div>
  );
};

SurgeriesListComponent.propTypes = {
  surgeries      : PropTypes.instanceOf(Array).isRequired,
  doctors        : PropTypes.instanceOf(Array).isRequired,
  history        : PropTypes.instanceOf(Object).isRequired,
  onSelectEvent  : PropTypes.func.isRequired,
  onSelectSlot   : PropTypes.func.isRequired,
  onSelectDoctor : PropTypes.func.isRequired
};

const withLifecycle = lifecycle({
  async componentDidMount() {
    this.props.showPageLoader();

    try {
      const response = await WebAPI.getDoctors();
      this.props.getDoctors(response);
      this.props.getSurgeries({ data: [] });
      this.props.hidePageLoader();
    } catch (error) {
      console.log(error);
      this.props.hidePageLoader();
    }
  }
});

const onSelectEvent = () => (event) => {
  Modal.info({
    title   : 'Agendamento',
    content : <SurgeryDetailList appointment={event.resource} />
  });
};

const onSelectSlot = props => () => {
  Modal.confirm({
    title   : 'Atenção',
    content : 'Deseja realizar um agendamento?',
    onOk    : () => props.history.push('/marcacoes/exames/novo')
  });
};

const onSelectDoctor = props => async (doctorId) => {
  props.showPageLoader();
  try {
    const res = await WebAPI.getSurgeries(doctorId);
    props.getSurgeries(res);
  } catch (error) {
    console.log(error);
  } finally {
    props.hidePageLoader();
  }
};

const withListHandlers = withHandlers({
  onSelectEvent,
  onSelectSlot,
  onSelectDoctor
});

export default compose(
  withLifecycle,
  withListHandlers
)(SurgeriesListComponent);
