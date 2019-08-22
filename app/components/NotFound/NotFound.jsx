import React from 'react';
import { Card } from 'antd';

import SvgIcon from '../SvgIcon';
import './NotFound.scss';

const NotFound = () => (
  <Card className="error-card">
    <div className="error-component">
      <SvgIcon className="error-icon" icon="NotFound" />
      <span>Este recurso ainda não foi implementado :(</span>
    </div>
  </Card>
);

export default NotFound;
