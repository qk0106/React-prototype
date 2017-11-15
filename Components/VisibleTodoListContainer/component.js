"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var action_1 = require("./action"); // To get Action Creators
var TodoList_1 = require("TodoList");
var ReduxConnectComponentWrapper_1 = require("ReduxConnectComponentWrapper");
var getVisibleTodos = function (todos, filter) {
    switch (filter) {
        case "SHOW_ALL":
            return todos;
        case "SHOW_COMPLETED":
            return todos.filter(function (t) { return t.completed; });
        case "SHOW_ACTIVE":
            return todos.filter(function (t) { return !t.completed; });
        default:
            return [];
    }
};
var stateProps = function (ownState, ownProps) { return ({
    todos: getVisibleTodos(ownState.todos, ownState.visibilityFilter)
}); };
var dispatchProps = function (dispatch, instanceId, ownProps, stateProps) { return ({
    onTodoClick: function (id) {
        dispatch(action_1.toggleTodo(instanceId, { id: id }));
    }
}); };
exports.VisibleTodoList = ReduxConnectComponentWrapper_1.wrapWithConnect({ stateProps: stateProps, dispatchProps: dispatchProps }, TodoList_1.TodoList);
