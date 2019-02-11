import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import pathToRegexp from 'path-to-regexp';

import SideMenu from '../SideMenu';
import Header from '../AppHeader';
import Bread from '../BreadCrumb';
import Loader from '../Loader';

// import { hasToken } from "../../utils/token";
import { showPageLoader, hidePageLoader } from './actions';
import menus from '../../mocks/menu';

import './index.scss';

const { Content } = Layout;
const hasPermissionToAccess = () => true;

const isCurrentLocation = (menu, location) => menu.route && pathToRegexp(menu.route).exec(location.pathname);

const DefaultLayout = (props) => {
  const {
    component: Component, loading, location, history, ...rest
  } = props;

  const contentStyle = {
    padding    : 24,
    background : '#fff',
    minHeight  : 360
  };

  const styles = {
    content: {
      display       : 'flex',
      flexDirection : 'column',
      alignItems    : 'stretch',
      margin        : '0 16px'
    },
    inner: {
      flexGrow      : 1,
      display       : 'flex',
      flexDirection : 'column',
      alignItems    : 'stretch'
    },
    component: {
      flexGrow : 1,
      display  : 'flex'
    }
  };

  const menuItem = menus.find(menu => isCurrentLocation(menu, location)) || { name: 'Não encontrado' };

  return (
    <Route
      {...rest}
      render={matchProps => (
        <Layout id="default-layout" style={{ height: '100%' }}>
          <SideMenu location={location} />
          <Layout>
            <Header />
            <Content style={styles.content}>
              <Bread />
              {hasPermissionToAccess() && (
                <div style={styles.inner}>
                  <h1 className="page-header">{menuItem.name}</h1>
                  <Component {...matchProps} />
                </div>
              )}
            </Content>
            <Loader loading={loading} fullScreen />
          </Layout>
        </Layout>
      )}
    />
  );
};

DefaultLayout.propTypes = {
  component          : PropTypes.instanceOf(Object).isRequired,
  loading            : PropTypes.bool.isRequired,
  location           : PropTypes.instanceOf(Object).isRequired,
  requiredPermission : PropTypes.instanceOf(Object),
  permissions        : PropTypes.instanceOf(Array),
  onEnter: PropTypes.func, // eslint-disable-line
  history            : PropTypes.instanceOf(Object).isRequired
};

DefaultLayout.defaultProps = {
  permissions        : [],
  requiredPermission : null
};

function mapStateToProps({ page }) {
  return {
    loading     : page.loading,
    permissions : []
  };
}

const connectedPage = connect(
  mapStateToProps,
  {
    showPageLoader,
    hidePageLoader
  }
)(DefaultLayout);

export default withRouter(connectedPage);
