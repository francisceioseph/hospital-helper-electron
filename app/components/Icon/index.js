import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default ({ icon, ...rest }) => (
  <i className="anticon">
    <FontAwesomeIcon icon={icon} {...rest} />
  </i>
);
