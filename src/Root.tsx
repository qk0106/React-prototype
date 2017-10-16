import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './container';
import { FetchRootReducer } from './RootReducer';
import { FetchRootRoutes } from './RootRoutes';

const loggerMiddleware = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

const actionHandlerMiddleware = store => next => action => {
  let result = next(action);
  if (action.type == "REFRESH_GIT_INFO") {
    store.dispatch({type: "FETCH_GIT_INFO"});
    fetch("https://api.github.com/repos/qk0106/React-prototype").then((res)=> {
      res.json().then((data) => {
        store.dispatch({type: "FETCH_GIT_INFO_SUCCESS", data});
      });
    }, (error) => {
      store.dispatch({ type: "FETCH_GIT_INFO_FAILED", error});
    })
  }
  return result;
}

const store = createStore(
  FetchRootReducer(), 
  applyMiddleware(
    actionHandlerMiddleware, 
    loggerMiddleware
  )
);

const routes = FetchRootRoutes();

render(
  <Provider store={store}>
    { routes }
  </Provider>,
  document.getElementById('app'),
);
