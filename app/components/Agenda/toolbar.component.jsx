import React from 'react';
import moment from 'moment';

import {
  Button, Radio, Row, Col
} from 'antd';

import { TEXT_DATE_FORMAT_PT_BR } from '../../utils/date-format';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const ButtonGroup = Button.Group;

const CustomToolbar = (toolbar) => {
  const goToBack = () => {
    toolbar.onNavigate('PREV');
  };

  const goToNext = () => {
    toolbar.onNavigate('NEXT');
  };

  const goToCurrent = () => {
    toolbar.onNavigate('TODAY');
  };

  const label = () => {
    const date = moment(toolbar.date).locale('pt-BR');
    return <h2 className="toolbar-label">{date.format(TEXT_DATE_FORMAT_PT_BR)}</h2>;
  };

  const onViewChange = (e) => {
    toolbar.onViewChange(e.target.value);
  };

  const getCurrentLabel = () => {
    switch (toolbar.view) {
    case 'week': {
      return 'Esta Semana';
    }

    case 'day': {
      return 'Hoje';
    }

    default: {
      return 'Esta Semana';
    }
    }
  };

  return (
    <Row className="toolbar" type="flex" justify="space-between" align="middle">
      <Col>
        <ButtonGroup>
          <Button onClick={goToBack}>&#8249;</Button>
          <Button onClick={goToCurrent}>{getCurrentLabel()}</Button>
          <Button onClick={goToNext}>&#8250;</Button>
        </ButtonGroup>
      </Col>
      <Col>{label()}</Col>
      <Col>
        <RadioGroup onChange={onViewChange} value={toolbar.view}>
          <RadioButton value="week">Por Semana</RadioButton>
          <RadioButton value="day">Por Dia</RadioButton>
        </RadioGroup>
      </Col>
    </Row>
  );
};

export default CustomToolbar;
