import React from 'react';
import _ from 'lodash';
import pathToRegexp from 'path-to-regexp';
import PropTypes from 'prop-types';
import { Layout, Menu } from 'antd';
import { Link, withRouter } from 'react-router-dom';

import { arrayToTree, queryArray } from '../../utils';
import menus from '../../mocks/menu';
import Icon from '../../components/Icon';

import './SideMenu.scss';

const { Sider } = Layout;

function getMenusForPermissions(menuList) {
  return menuList;
  // return _.filter(menuList, menu => {
  //   const menuPermissions = _.filter(userPermissions, p => {
  //     const { permission } = menu;
  //     return (
  //       permission &&
  //       p.action === permission.action &&
  //       _.includes(permission.resources, p.resource)
  //     );
  //   });
  //   return !!menuPermissions.length;
  // });
}

function makeMenuDataTree(menuList) {
  const validMenus = _.filter(menuList, it => it.menuParentCode !== '-1');
  return arrayToTree(validMenus, 'code', 'menuParentCode');
}

function makeMenuItemTree(menuTree) {
  const levelMap = {};

  return _.map(menuTree, item => {
    if (item.children) {
      if (item.menuParentCode) {
        levelMap[item.code] = item.menuParentCode;
      }
      return (
        <Menu.SubMenu
          key={item.code}
          title={
            <span>
              {item.icon && <Icon icon={item.icon} />}
              {<span>{item.name}</span>}
            </span>
          }
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

  const getPath = item => {
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
  const menusForPermissions = getMenusForPermissions(menus, permissions);
  const menuTree = makeMenuDataTree(menusForPermissions);
  const menuItems = makeMenuItemTree(menuTree);

  // Look for the selected route
  const currentMenu = _.find(
    menus,
    it => it.route && pathToRegexp(it.route).exec(location.pathname)
  );

  const defaultSelectedKeys = currentMenu
    ? getPathArray(menus, currentMenu, 'menuParentCode', 'code')
    : ['1'];

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      width={250}
      theme="dark"
    >
      <div className="logo">
        <div id="logo">
          {collapsed && (
            <span>
              <Icon icon="hospital" size="2x" />
            </span>
          )}
          {!collapsed && (
            <span>
              <Icon icon="hospital" size="2x" />
              <span>Hospital Helper</span>
            </span>
          )}
        </div>
      </div>
      <Menu mode="inline" theme="dark" selectedKeys={defaultSelectedKeys}>
        {menuItems}
      </Menu>
    </Sider>
  );
};

SideMenu.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  permissions: PropTypes.instanceOf(Array).isRequired,
  location: PropTypes.object.isRequired // eslint-disable-line
};

export default withRouter(SideMenu);
