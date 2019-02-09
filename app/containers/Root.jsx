// @flow
import React, { Component } from 'react';
import ptBr from 'antd/lib/locale-provider/pt_BR';
import PropTypes from 'prop-types';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { LocaleProvider } from 'antd';
import { ActionCableProvider } from 'react-actioncable-provider';

import Routes from '../Routes';
import { getActionCableConsumer } from '../utils/action-cable.service';

export default function Root(props) {
  const { store, history } = props;
  const cableConsumer = getActionCableConsumer();

  return (
    <ActionCableProvider cable={cableConsumer}>
      <Provider store={store}>
        <LocaleProvider locale={ptBr}>
          <ConnectedRouter history={history}>
            <Routes />
          </ConnectedRouter>
        </LocaleProvider>
      </Provider>
    </ActionCableProvider>
  );
}

Root.propTypes = {
  store   : PropTypes.instanceOf(Object).isRequired,
  history : PropTypes.instanceOf(Object).isRequired
};
