// @flow
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reduxPromiseMiddleware from 'redux-promise';

import { createHashHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import createRootReducer from '../reducers';
import { localStorageMiddleware, reHydrateStore } from './persist';

const history = createHashHistory();
const rootReducer = createRootReducer(history);
const router = routerMiddleware(history);
const enhancer = applyMiddleware(
  thunk,
  router,
  localStorageMiddleware,
  reduxPromiseMiddleware
);

function configureStore() {
  return createStore(rootReducer, reHydrateStore(), enhancer);
}

export default { configureStore, history };
