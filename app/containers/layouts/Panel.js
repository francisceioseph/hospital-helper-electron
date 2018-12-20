import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import PropTypes from 'prop-types';

import SideMenu from '../SideMenu';
import Header from '../AppHeader';
import Bread from '../BreadCrumb';
import Loader from '../Loader';

// import { hasToken } from "../../utils/token";
import { pageStartLoadingAction, pageStopLoadingAction } from './actions';

import './index.scss';

const { Content } = Layout;
class DefaultLayout extends React.Component {

  render() {
    const {
      component: Component,
      loading,
      location,
      history,
      ...rest
    } = this.props;

    const contentStyle = {
      padding: 24,
      background: '#fff',
      minHeight: 360
    };

    return (
      <Route
        {...rest}
        render={matchProps => (
          <Layout id="default-layout" style={{ height: '100%' }}>
            <SideMenu location={location} />
            <Layout>
              <Header />
              <Content style={{ margin: '0 16px' }}>
                <Bread />
                <Loader loading={loading} fullScreen />
                <div style={contentStyle}>
                  {this.hasPermissionToAccess() && (
                    <Component {...matchProps} />
                  )}
                </div>
              </Content>
            </Layout>
          </Layout>
        )}
      />
    );
  }
}

DefaultLayout.propTypes = {
  component: PropTypes.instanceOf(Object).isRequired,
  loading: PropTypes.bool.isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
  requiredPermission: PropTypes.instanceOf(Object),
  permissions: PropTypes.instanceOf(Array),
  onEnter: PropTypes.func, // eslint-disable-line
  history: PropTypes.instanceOf(Object).isRequired
};

DefaultLayout.defaultProps = {
  permissions: [],
  requiredPermission: null
};

function mapStateToProps({ page }) {
  return {
    loading: page.loading,
    permissions: []
  };
}

const connectedPage = connect(
  mapStateToProps,
  {
    pageStartLoadingAction,
    pageStopLoadingAction
  }
)(DefaultLayout);

export default withRouter(connectedPage);
