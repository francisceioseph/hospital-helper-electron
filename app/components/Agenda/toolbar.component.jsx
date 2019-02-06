import React from 'react';
import moment from 'moment';

import {
  Button, Radio, Row, Col
} from 'antd';

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
    return (
      <label className="toolbar-label">
        <b>{date.format('MMMM')}</b>
        {' '}
        {date.format('YYYY')}
      </label>
    );
  };

  const onViewChange = (e) => {
    toolbar.onViewChange(e.target.value);
  };

  return (
    <Row className="toolbar" type="flex" justify="space-between" align="middle">
      <Col>
        <ButtonGroup>
          <Button onClick={goToBack}>&#8249;</Button>
          <Button onClick={goToCurrent}>Hoje</Button>
          <Button onClick={goToNext}>&#8250;</Button>
        </ButtonGroup>
      </Col>
      <Col>
        {' '}
        {label()}
        {' '}
      </Col>
      <Col>
        <RadioGroup onChange={onViewChange} value={toolbar.view}>
          <RadioButton value="month">Por Mês</RadioButton>
          <RadioButton value="week">Por Semana</RadioButton>
          <RadioButton value="day">Por Dia</RadioButton>
        </RadioGroup>
      </Col>
    </Row>
  );
};

export default CustomToolbar;
