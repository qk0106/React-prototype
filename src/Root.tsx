import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './container';
import { FetchRootReducer } from './RootReducer';
import { FetchRootRoutes } from './RootRoutes';
//import * as fetch from "fetch";

const actionHandlerMiddleware = store => next => action => {
  let result = next(action);
  if (action.type == "REFRESH") {
    store.dispatch({type: "FETCH_GIT_INFO"});
    fetch("https://api.github.com/repos/qk0106/React-prototype").then((data)=> {
      store.dispatch({type: "FETCH_GIT_INFO_SUCCESS", data})
    }, (error) => {
      store.dispatch({ type: "FETCH_GIT_INFO_FAILED", error});
    })
  }
  return result
}

const store = createStore(FetchRootReducer(), applyMiddleware(actionHandlerMiddleware));
const routes = FetchRootRoutes();

console.log(store.getState());

render(
  <Provider store={store}>
    { routes }
  </Provider>,
  document.getElementById('app'),
);
