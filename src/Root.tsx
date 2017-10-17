import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './container';
import { FetchRootMiddlewares } from './RootMiddlewares';
import { FetchRootReducer } from './RootReducer';
import { FetchRootRoutes } from './RootRoutes';

const store = createStore(
  FetchRootReducer(), 
  FetchRootMiddlewares()
);

const routes = FetchRootRoutes();

render(
  <Provider store={store}>
    { routes }
  </Provider>,
  document.getElementById('app'),
);
