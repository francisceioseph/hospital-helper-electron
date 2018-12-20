// @flow
import React, { Component } from 'react';
import ptBr from 'antd/lib/locale-provider/pt_BR';
import PropTypes from 'prop-types';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { LocaleProvider } from 'antd';

import Routes from '../Routes';

export default class Root extends Component {
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <LocaleProvider locale={ptBr}>
          <ConnectedRouter history={history}>
            <Routes />
          </ConnectedRouter>
        </LocaleProvider>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.instanceOf(Object).isRequired,
  history: PropTypes.instanceOf(History).isRequired
};
