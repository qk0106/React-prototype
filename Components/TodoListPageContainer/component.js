"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var GitInfor_1 = require("GitInfor");
var TodoLister_1 = require("TodoLister");
var ReactRouteManager_1 = require("ReactRouteManager");
var TodoListPage = function () { return (React.createElement("div", null,
    React.createElement("span", null, "This is Todo List Page"),
    React.createElement(TodoLister_1.TodoLister, { instanceIdPrefix: "TodoListPage", inputText: "This is TodoList 1" }),
    React.createElement(TodoLister_1.TodoLister, { instanceIdPrefix: "TodoListPage", inputText: "This is TodoList 2" }),
    React.createElement(GitInfor_1.GitInfor, { instanceIdPrefix: "TodoListPage", gitUrl: "https://api.github.com/repos/qk0106/React-prototype" }),
    React.createElement(GitInfor_1.GitInfor, { instanceIdPrefix: "TodoListPage", gitUrl: "https://api.github.com/repos/qk0106/ACE-online-tutor" }))); };
ReactRouteManager_1.registerRoute("TodoList", "/todoList", "Todo List", TodoListPage);
