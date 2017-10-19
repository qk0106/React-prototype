import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './container';
import { FetchRootRoutes } from './RootRoutes';
import { FetchRootReducer } from './RootReducer';
import { FetchRootMiddlewares } from './RootMiddlewares';

const store = createStore(
    FetchRootReducer(),
    FetchRootMiddlewares()
);

const routes = FetchRootRoutes();

render(
    <Provider store={store}>
        {routes}
    </Provider>,
    document.getElementById('app'),
);
