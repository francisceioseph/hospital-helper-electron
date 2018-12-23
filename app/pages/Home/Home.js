import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col } from 'antd';
import { compose, withState, lifecycle } from 'recompose';

import menus from '../../mocks/menu';
import ShortcutCard from './components/shortcut-card.component';

import './Home.scss';

const withMenuList = withState('menuList', 'setMenuList', []);

const withLifecyle = lifecycle({
  componentWillMount() {
    const menuList = menus.filter(item => !!item.route);
    this.props.setMenuList(menuList);
  }
});

const ShortcutList = props => (
  <div>
    <Row gutter={16}>
      {props.menuList.map(item => (
        <Col span={4} key={item.code}>
          <ShortcutCard name={item.name} icon={item.icon} route={item.route} />
        </Col>
      ))}
    </Row>
  </div>
);

ShortcutList.propTypes = {
  menuList: PropTypes.instanceOf(Array).isRequired
};

export default compose(
  withMenuList,
  withLifecyle
)(ShortcutList);
