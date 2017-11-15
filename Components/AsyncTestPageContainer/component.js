"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var GitInfoContainer_1 = require("GitInfoContainer");
var TodoListContainer_1 = require("TodoListContainer");
var ReactRouteManager_1 = require("ReactRouteManager");
var AsyncTestPage = function () { return (React.createElement("div", null,
    React.createElement("span", null, "This is Async Page"),
    React.createElement(GitInfoContainer_1.GitInfoContainer, { instanceIdPrefix: "AsyncTestPage", gitUrl: "https://api.github.com/repos/qk0106/React-prototype" }),
    React.createElement(GitInfoContainer_1.GitInfoContainer, { instanceIdPrefix: "AsyncTestPage", gitUrl: "https://api.github.com/repos/qk0106/ACE-online-tutor" }),
    React.createElement(TodoListContainer_1.TodoListContainer, { instanceIdPrefix: "AsyncTestPage", inputText: "This is TodoList in async page" }))); };
ReactRouteManager_1.registerRoute("AsyncTest", "/asyncTest", "Async Test", AsyncTestPage);
