import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { FetchRootReducer } from './RootReducer';
import { TodoListApp } from './container/TodoListApp';

const store = createStore(FetchRootReducer());

console.log(store.getState());

render(
  <Provider store={store}>
    <TodoListApp />
  </Provider>,
  document.getElementById('app'),
);
