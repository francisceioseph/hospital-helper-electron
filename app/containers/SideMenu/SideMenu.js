import React from 'react';
import _ from 'lodash';
import pathToRegexp from 'path-to-regexp';
import PropTypes from 'prop-types';
import {
  Layout, Menu, Row, Col
} from 'antd';
import { Link, withRouter } from 'react-router-dom';

import { arrayToTree, queryArray } from '../../utils';
import menus from '../../mocks/menu';
import Icon from '../../components/Icon';

import SideMenuLogo from '../../resources/imgs/cross.png';
import SideMenuLogoBig from '../../resources/imgs/cross-big.png';

import './SideMenu.scss';

const { Sider } = Layout;

function getMenusForPermissions(menuList, permissions) {
  return _.filter(menuList, (menuItem) => {
    const permission = menuItem.permission || {};

    const permissionsGranted = _.chain(permission.resources)
      .map(resource => permissions[resource])
      .filter(p => !!p && p.action_type === 'view')
      .size()
      .value();

    return permissionsGranted > 0;
  });
}

function makeMenuDataTree(menuList) {
  const validMenus = _.filter(menuList, it => it.menuParentCode !== '-1');
  return arrayToTree(validMenus, 'code', 'menuParentCode');
}

function makeMenuItemTree(menuTree) {
  const levelMap = {};

  return _.map(menuTree, (item) => {
    if (item.children) {
      if (item.menuParentCode) {
        levelMap[item.code] = item.menuParentCode;
      }
      return (
        <Menu.SubMenu
          key={item.code}
          title={(
            <span>
              {item.icon && <Icon icon={item.icon} />}
              {<span>{item.name}</span>}
            </span>
          )}
        >
          {makeMenuItemTree(item.children)}
        </Menu.SubMenu>
      );
    }
    return (
      <Menu.Item key={item.code}>
        <Link to={item.route || '#'}>
          {item.icon && <Icon icon={item.icon} />}
          {<span>{item.name}</span>}
        </Link>
      </Menu.Item>
    );
  });
}

function getPathArray(array, current, pid, id) {
  let result = [String(current[id])]; // eslint-disable-line

  const getPath = (item) => {
    if (item && item[pid]) {
      result.unshift(String(item[pid]));
      getPath(queryArray(array, item[pid], id));
    }
  };

  getPath(current);
  return result;
}

const SideMenu = ({ collapsed, location, permissions }) => {
  // Generate Trees
  const menuPermissions = getMenusForPermissions(menus, permissions);
  const menuTree = makeMenuDataTree(menuPermissions);
  const menuItems = makeMenuItemTree(menuTree);

  // Look for the selected route
  const currentMenu = _.find(menus, it => it.route && pathToRegexp(it.route).exec(location.pathname));

  const defaultSelectedKeys = currentMenu ? getPathArray(menus, currentMenu, 'menuParentCode', 'code') : ['1'];

  return (
    <Sider className="scroll" trigger={null} collapsible collapsed={collapsed} width={250} theme="dark">
      <div className="side-logo" style={{ height: collapsed ? 80 : 'auto' }}>
        <div style={{ display: collapsed ? '' : 'none' }}>
          <img src={SideMenuLogo} alt="hospital logo" width="80" />
        </div>

        <div style={{ display: collapsed ? 'none' : '' }}>
          <img src={SideMenuLogoBig} alt="hospital logo" width="250" />
        </div>
      </div>
      <Menu mode="inline" theme="dark" selectedKeys={defaultSelectedKeys}>
        {menuItems}
      </Menu>
    </Sider>
  );
};

SideMenu.propTypes = {
  collapsed   : PropTypes.bool.isRequired,
  permissions : PropTypes.instanceOf(Object).isRequired,
  location: PropTypes.object.isRequired // eslint-disable-line
};

export default withRouter(SideMenu);
