"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var GitInfoContainer_1 = require("GitInfoContainer");
var TodoListContainer_1 = require("TodoListContainer");
var ReactRouteManager_1 = require("ReactRouteManager");
var TodoListPage = function () { return (React.createElement("div", null,
    React.createElement("span", null, "This is Todo List Page"),
    React.createElement(TodoListContainer_1.TodoListContainer, { instanceIdPrefix: "TodoListPage", inputText: "This is TodoList 1" }),
    React.createElement(TodoListContainer_1.TodoListContainer, { instanceIdPrefix: "TodoListPage", inputText: "This is TodoList 2" }),
    React.createElement(GitInfoContainer_1.GitInfoContainer, { instanceIdPrefix: "TodoListPage", gitUrl: "https://api.github.com/repos/qk0106/React-prototype" }),
    React.createElement(GitInfoContainer_1.GitInfoContainer, { instanceIdPrefix: "TodoListPage", gitUrl: "https://api.github.com/repos/qk0106/ACE-online-tutor" }))); };
ReactRouteManager_1.registerRoute("TodoList", "/todoList", "Todo List", TodoListPage);
