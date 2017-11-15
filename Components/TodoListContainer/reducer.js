"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var iassign = require("immutable-assign");
var AddTodo_1 = require("AddTodo");
var VisibleTodoList_1 = require("VisibleTodoList");
var TodoFilterLink_1 = require("TodoFilterLink"); // To get Action Types
var redux_1 = require("redux");
var inputText = function (inputText, action) {
    if (inputText === void 0) { inputText = ""; }
    switch (action.type) {
        case AddTodo_1.CHANGE_INPUT_TEXT:
            return action.text;
        default:
            return inputText;
    }
};
var visibilityFilter = function (visibilityFilter, action) {
    if (visibilityFilter === void 0) { visibilityFilter = "SHOW_ALL"; }
    switch (action.type) {
        case TodoFilterLink_1.SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return visibilityFilter;
    }
};
var todos = function (todos, action) {
    if (todos === void 0) { todos = []; }
    switch (action.type) {
        case AddTodo_1.ADD_TODO:
            return iassign(todos, function (arr) {
                var id = arr.length;
                arr.push({
                    id: id,
                    text: action.text,
                    completed: false
                });
                return arr;
            });
        case VisibleTodoList_1.TOGGLE_TODO:
            return iassign(todos, function (arr, ctx) { return arr[ctx.id].completed; }, function (completed) { return !completed; }, {
                id: action.id
            });
        default:
            return todos;
    }
};
exports.reducer = redux_1.combineReducers({
    inputText: inputText,
    visibilityFilter: visibilityFilter,
    todos: todos
});
