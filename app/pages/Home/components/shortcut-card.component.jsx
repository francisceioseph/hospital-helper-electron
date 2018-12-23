import React from 'react';
import PropTypes from 'prop-types';

import { compose, withHandlers } from 'recompose';
import { Card } from 'antd';

import Icon from '../../../components/Icon';
import { history } from '../../../store';
import './shortcut-card.scss';

const withShortcutHandlers = withHandlers({
  onShortcutClick: props => () => {
    history.push(props.route);
  }
});

const ShortcutCard = props => (
  <Card
    className="shortcut"
    hoverable
    cover={<Icon icon={props.icon || 'cog'} size="2x" />}
    onClick={props.onShortcutClick}
  >
    <Card.Meta title={props.name} />
  </Card>
);

ShortcutCard.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string.isRequired,
  onShortcutClick: PropTypes.func.isRequired
};

ShortcutCard.defaultProps = {
  icon: 'cogs'
};

export default compose(withShortcutHandlers)(ShortcutCard);
