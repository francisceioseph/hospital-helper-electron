import React from 'react';
import PropTypes from 'prop-types';

import { Layout, Icon, Menu } from 'antd';
import { withHandlers, compose } from 'recompose';

import HeaderBadge from './header-badge.component';

import './header.scss';

const { Header } = Layout;
const { SubMenu } = Menu;

const handleLogoutButtonClick = props => () => props.clearCredentials();
const handleOnEditProfileClick = () => () => alert('Not implemented :P');
const simplifyUserName = name => name.split(' ')[0];

const withHeaderHandlers = withHandlers({
  onLogoutClick      : handleLogoutButtonClick,
  onEditProfileClick : handleOnEditProfileClick
});

const AppHeader = props => (
  <Header className="header" style={{ background: '#fff', padding: 0 }}>
    <div>
      <Icon className="trigger" type={props.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={props.toggleMenu} />
    </div>

    <div className="rightWrapper">
      <Menu mode="horizontal">
        <SubMenu
          title={(
            <span>
              <Icon type="user" />
              {simplifyUserName(props.profile.personal_datum.full_name)}
            </span>
          )}
        >
          <Menu.Item key="logout">
            <div onClick={props.onLogoutClick}>
              <Icon type="logout" />
              <span>Logout</span>
            </div>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  </Header>
);

AppHeader.propTypes = {
  collapsed  : PropTypes.bool.isRequired,
  toggleMenu : PropTypes.func.isRequired,
  profile    : PropTypes.instanceOf(Object).isRequired
};

export default compose(withHeaderHandlers)(AppHeader);
