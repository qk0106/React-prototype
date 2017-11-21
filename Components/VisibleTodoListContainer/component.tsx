import { toggleTodo } from "./action"; // To get Action Creators
import { TodoListPresenter } from "TodoListPresenter";
import { wrapWithConnect } from "ReduxConnectComponentWrapper";

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

export const VisibleTodoListContainer = wrapWithConnect(
    stateProps,
    dispatchProps,
    TodoListPresenter
);
