"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var GitInfor_1 = require("GitInfor");
var TodoLister_1 = require("TodoLister");
var ReactRouteManager_1 = require("ReactRouteManager");
var AsyncTestPage = function () { return (React.createElement("div", null,
    React.createElement("span", null, "This is Async Page"),
    React.createElement(GitInfor_1.GitInfor, { instanceIdPrefix: "AsyncTestPage", gitUrl: "https://api.github.com/repos/qk0106/React-prototype" }),
    React.createElement(GitInfor_1.GitInfor, { instanceIdPrefix: "AsyncTestPage", gitUrl: "https://api.github.com/repos/qk0106/ACE-online-tutor" }),
    React.createElement(TodoLister_1.TodoLister, { instanceIdPrefix: "AsyncTestPage", inputText: "This is TodoList in async page" }))); };
ReactRouteManager_1.registerRoute("AsyncTest", "/asyncTest", "Async Test", AsyncTestPage);
