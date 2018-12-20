// @flow
import React, { Component } from 'react';
import ptBr from 'antd/lib/locale-provider/pt_BR';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { LocaleProvider } from 'antd';

import Routes from '../Routes';
import { any } from 'bluebird-lst';

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
  store: any,
  history: History
}
