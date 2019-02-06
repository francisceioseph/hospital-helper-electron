import React from 'react';

import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout } from 'antd';

import Loader from '../Loader';
import { showPageLoader, hidePageLoader } from './actions';

import './index.scss';

const { Content } = Layout;

class PageLayout extends React.Component {
  render() {
    const { loading, component: Component, ...rest } = this.props; //eslint-disable-line
    const renderComponent = matchProps => (
      <Layout id="page-layout">
        <Content>
          <Loader loading={loading} fullScreen />
          <Component {...matchProps} />
        </Content>
      </Layout>
    );

    return <Route {...rest} render={renderComponent} />;
  }
}

function mapStateToProps({ page }) {
  return {
    loading: page.loading
  };
}

const connectedPage = connect(
  mapStateToProps,
  {
    showPageLoader,
    hidePageLoader
  }
)(PageLayout);

export default withRouter(connectedPage);
