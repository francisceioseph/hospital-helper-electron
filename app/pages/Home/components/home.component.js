import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

import { Row, Col } from 'antd';
import { compose, withState, lifecycle } from 'recompose';

import menus from '../../../mocks/menu';
import ShortcutCard from './shortcut-card.component';

import '../Home.scss';

function getMenusForPermissions(menuList, permissions) {
  return _.filter(menuList, (menuItem) => {
    if (!menuItem.menuParentCode) {
      return false;
    }

    const permission = menuItem.permission || {};

    const permissionsGranted = _.chain(permission.resources)
      .map(resource => permissions[resource])
      .filter(p => !!p && p.action_type === 'view')
      .size()
      .value();

    return permissionsGranted > 0;
  });
}

const withMenuList = withState('menuList', 'setMenuList', []);

const withLifecyle = lifecycle({
  componentWillMount() {
    const items = getMenusForPermissions(menus, this.props.permissions);
    this.props.setMenuList(items);
  }
});

const ShortcutList = props => (
  <div>
    <Row gutter={16}>
      {props.menuList.map(item => (
        <Col className="col-shortcut" span={4} key={item.code}>
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
