import { toggleTodo } from "./action"; // To get Action Creators
import { TodoList } from "TodoList";
import { generateReduxComponent } from "ConnectHelper";

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
        dispatch(toggleTodo(instanceId, { id }));
    }
});

export const VisibleTodoList = generateReduxComponent({ stateProps, dispatchProps }, TodoList);
