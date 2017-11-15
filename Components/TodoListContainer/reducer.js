"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var iassign = require("immutable-assign");
var AddTodoContainer_1 = require("AddTodoContainer");
var VisibleTodoListContainer_1 = require("VisibleTodoListContainer");
var TodoFilterLinkContainer_1 = require("TodoFilterLinkContainer"); // To get Action Types
var redux_1 = require("redux");
var inputText = function (inputText, action) {
    if (inputText === void 0) { inputText = ""; }
    switch (action.type) {
        case AddTodoContainer_1.CHANGE_INPUT_TEXT:
            return action.text;
        default:
            return inputText;
    }
};
var visibilityFilter = function (visibilityFilter, action) {
    if (visibilityFilter === void 0) { visibilityFilter = "SHOW_ALL"; }
    switch (action.type) {
        case TodoFilterLinkContainer_1.SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return visibilityFilter;
    }
};
var todos = function (todos, action) {
    if (todos === void 0) { todos = []; }
    switch (action.type) {
        case AddTodoContainer_1.ADD_TODO:
            return iassign(todos, function (arr) {
                var id = arr.length;
                arr.push({
                    id: id,
                    text: action.text,
                    completed: false
                });
                return arr;
            });
        case VisibleTodoListContainer_1.TOGGLE_TODO:
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
