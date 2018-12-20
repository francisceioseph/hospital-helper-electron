import React from 'react';
import SvgIcon from '../SvgIcon';
import './NotFound.scss';

const NotFound = () => (
  <div className="error-component">
    <SvgIcon className="error-icon" icon="NotFound" />
    <span>Esta página não está disponível</span>
  </div>
);

export default NotFound;
