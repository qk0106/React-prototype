import * as React from "react";
import { HashRouter, Switch, Route, Link } from "react-router-dom";

let routeRegistry = {};

export const registerRoute = (componentName, path, text, component) => {
    routeRegistry[componentName] = {
        path: path,
        text: text,
        key: componentName,
        component: component
    };
};

const rows = (template, routes) => {
    let rows = [];
    for (var key in routes) {
        if (routes.hasOwnProperty(key)) {
            rows.push(template(routes[key]));
        }
    }
    return rows;
};

const linkTemplate = route => (
    <Link key={route.key + "_link"} to={route.path}>
        {"| " + route.text + " |"}
    </Link>
);

const routeTemplate = route => (
    <Route key={route.key + "_route"} exact path={route.path} component={route.component} />
);

export const collectRoutes = () => {
    return (
        <HashRouter>
            <div>
                {rows(linkTemplate, routeRegistry)}
                <Switch>{rows(routeTemplate, routeRegistry)}</Switch>
            </div>
        </HashRouter>
    );
};
