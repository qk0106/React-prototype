import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import * as Containers from './container';
import { FetchRootReducer } from './RootReducer';
import { FetchRootRoutes } from './RootRoutes';

console.log(Containers === Containers);

const store = createStore(FetchRootReducer());
const routes = FetchRootRoutes();

console.log(store.getState());

render(
  <Provider store={store}>
    { routes }
  </Provider>,
  document.getElementById('app'),
);
