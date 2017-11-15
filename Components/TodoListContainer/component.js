"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var reducer_1 = require("./reducer");
var AddTodoContainer_1 = require("AddTodoContainer");
var TodoFooterContainer_1 = require("TodoFooterContainer");
var VisibleTodoListContainer_1 = require("VisibleTodoListContainer");
var ReactInstanceComponentWrapper_1 = require("ReactInstanceComponentWrapper");
var TodoList = function (_a) {
    var instanceProps = _a.instanceProps, inputText = _a.inputText;
    return (React.createElement("div", null,
        React.createElement(AddTodoContainer_1.AddTodoContainer, { instanceProps: instanceProps, inputText: inputText }),
        React.createElement(VisibleTodoListContainer_1.VisibleTodoListContainer, { instanceProps: instanceProps }),
        React.createElement(TodoFooterContainer_1.TodoFooterContainer, { instanceProps: instanceProps })));
};
exports.TodoListContainer = ReactInstanceComponentWrapper_1.wrapWithInstance("TodoListContainers", TodoList, reducer_1.reducer);
