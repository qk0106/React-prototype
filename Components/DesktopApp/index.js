"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var iassign = require("immutable-assign");
var react_dom_1 = require("react-dom");
var react_hot_loader_1 = require("react-hot-loader");
var redux_logger_1 = require("redux-logger");
var redux_dynamic_middlewares_1 = require("redux-dynamic-middlewares");
var ReduxStoreManager_1 = require("ReduxStoreManager");
var ReactRouteManager_1 = require("ReactRouteManager");
var app_1 = require("./app"); // must isolate App for hot reload
require("semantic-ui-css/semantic.min.css");
require("./routesRegistry"); // register must happen before collectRoutes()
iassign.setOption({ freeze: true }); // throw immutable error
var loggerMiddleware = redux_logger_1.createLogger();
redux_dynamic_middlewares_1.addMiddleware(loggerMiddleware);
var store = ReduxStoreManager_1.readStore();
var routes = ReactRouteManager_1.collectRoutes();
var appElement = document.getElementById("app");
react_dom_1.render(React.createElement(react_hot_loader_1.AppContainer, null,
    React.createElement(app_1.App, { store: store, routes: routes })), appElement);
// Hot Module Replacement API
if (module.hot) {
    module.hot.accept("./app", function () {
        var NextApp = require("./app").default;
        react_dom_1.render(React.createElement(react_hot_loader_1.AppContainer, null,
            React.createElement(NextApp, { store: store, routes: routes })), appElement);
    });
}
