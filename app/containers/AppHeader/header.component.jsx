import React from 'react';
import PropTypes from 'prop-types';

import { Layout, Icon, Menu } from 'antd';
import { withHandlers, compose } from 'recompose';

import './header.scss';

const { Header } = Layout;
const { SubMenu } = Menu;

const withHeaderHandlers = withHandlers({});

const AppHeader = props => (
  <Header className="header" style={{ background: '#fff', padding: 0 }}>
    <div>
      <Icon
        className="trigger"
        type={props.collapsed ? 'menu-unfold' : 'menu-fold'}
        onClick={props.toggleMenu}
      />
    </div>

    <div className="rightWrapper">
      <Menu mode="horizontal">
        <SubMenu
          title={
            <span>
              <Icon type="user" />
              Regulação
            </span>
          }
        />
      </Menu>
    </div>
  </Header>
);

AppHeader.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default compose(withHeaderHandlers)(AppHeader);
