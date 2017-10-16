import * as React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

let routes = {};

export const RegisterToRootRoutes = (componentName, path, text, component) => {
  routes[componentName] = {
    path: path,
    text: text,
    key: componentName,
    component: component
  };
};

const rows = (template, routes) => {
  let rows = [];
  for(var key in routes) {
    if(routes.hasOwnProperty(key)) {
      rows.push(template(routes[key]));
    }
  }
  return rows;
};

const linkTemplate = (route) => (
  <Link key={ route.key + '_link'} to={route.path}>{route.text}</Link>
);

const routeTemplate = (route) => (
  <Route key={ route.key + '_route'} exact path={route.path} component={route.component} />
);

export const FetchRootRoutes = () => {
  let linkRows = rows(linkTemplate, routes);
  let routeRows = rows(routeTemplate, routes);

  return (<BrowserRouter>
    <div>
      {linkRows}
      <Switch>
          {routeRows}
      </Switch>
    </div>
  </BrowserRouter>)
};
