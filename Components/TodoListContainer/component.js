"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var reducer_1 = require("./reducer");
var AddTodo_1 = require("AddTodo");
var TodoFooter_1 = require("TodoFooter");
var VisibleTodoList_1 = require("VisibleTodoList");
var ReactInstanceComponentWrapper_1 = require("ReactInstanceComponentWrapper");
var _TodoLister = function (_a) {
    var instanceProps = _a.instanceProps, inputText = _a.inputText;
    return (React.createElement("div", null,
        React.createElement(AddTodo_1.AddTodo, { instanceProps: instanceProps, inputText: inputText }),
        React.createElement(VisibleTodoList_1.VisibleTodoList, { instanceProps: instanceProps }),
        React.createElement(TodoFooter_1.TodoFooter, { instanceProps: instanceProps })));
};
exports.TodoLister = ReactInstanceComponentWrapper_1.wrapWithInstance("TodoListers", _TodoLister, reducer_1.reducer);
