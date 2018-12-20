import React from 'react';
import { defaultProps, compose } from 'recompose';
import { Badge, Icon } from 'antd';

const HeaderBadge = props => (
  <div className={'button'}>
    <Badge count={props.count}>
      <Icon type={props.icon} />
    </Badge>
  </div>
);

export default compose(
  defaultProps({
    count: 0
  })
)(HeaderBadge);
