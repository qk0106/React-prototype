import * as React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Home, TodoListApp } from './container';

export const RootRoutes = (
  <BrowserRouter>
    <div>
      <Link to="/">Home</Link>{' '}
      <Link to="/todo">Todo List</Link>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/todo" component={TodoListApp} />
      </Switch>
    </div>
  </BrowserRouter>
);