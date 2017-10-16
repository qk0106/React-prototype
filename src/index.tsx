import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './container';
import { FetchRootReducer } from './RootReducer';
import { FetchRootRoutes } from './RootRoutes';

const store = createStore(FetchRootReducer());
const routes = FetchRootRoutes();

console.log(store.getState());

render(
  <Provider store={store}>
    { routes }
  </Provider>,
  document.getElementById('app'),
);
