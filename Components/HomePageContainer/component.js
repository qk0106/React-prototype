"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactRouteManager_1 = require("ReactRouteManager");
var HomePage = function () { return (React.createElement("div", null,
    React.createElement("span", null, "This is Home"))); };
ReactRouteManager_1.registerRoute("Home", "/", "Home", HomePage);
