"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
exports.App = function (_a) {
    var store = _a.store, routes = _a.routes;
    return React.createElement(react_redux_1.Provider, { store: store }, routes);
};
