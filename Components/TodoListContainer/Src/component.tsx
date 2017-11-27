import { wrapWithConnect } from "ReduxConnectWrapper";

import { toggleTodo } from "./action";
import { TodoListPresenter } from "TodoListPresenter";

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case "SHOW_ALL":
            return todos;
        case "SHOW_COMPLETED":
            return todos.filter(t => t.completed);
        case "SHOW_ACTIVE":
            return todos.filter(t => !t.completed);
        default:
            return [];
    }
};

const stateProps = (ownState, ownProps) => ({
    todos: getVisibleTodos(ownState.todos, ownState.visibilityFilter)
});

const dispatchProps = (dispatch, instanceId, ownProps, stateProps) => ({
    onTodoClick: id => {
        dispatch(toggleTodo(instanceId)({ id }));
    }
});

export const TodoListContainer = wrapWithConnect(stateProps, dispatchProps)(TodoListPresenter);
