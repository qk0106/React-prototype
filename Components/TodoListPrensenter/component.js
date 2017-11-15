"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var style = require("./style.less");
var React = require("react");
var CSSModules = require("react-css-modules");
var semantic_ui_react_1 = require("semantic-ui-react");
var Todo_1 = require("Todo");
var makeTodoClick = function (onTodoClick, id) { return function () {
    onTodoClick(id);
}; };
var rows = function (todos, onTodoClick) {
    return todos.map(function (todo, index) { return (React.createElement(Todo_1.Todo, __assign({ key: index }, todo, { onClick: makeTodoClick(onTodoClick, todo.id) }))); });
};
var _TodoList = function (_a) {
    var todos = _a.todos, onTodoClick = _a.onTodoClick;
    return (React.createElement(semantic_ui_react_1.List, { animated: true, bulleted: true, styleName: "ul-bg" }, rows(todos, onTodoClick)));
};
exports.TodoList = CSSModules(_TodoList, style); // modulise style with component
