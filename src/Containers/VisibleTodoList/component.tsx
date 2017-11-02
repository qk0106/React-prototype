import { toggleTodo } from "./action"; // To get Action Creators
import { TodoList } from "TodoList";
import { getOwnState, generateContainer } from "ReduxHelper";

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

const mapStateToProps = (state, ownProps) => {
    let ownState = getOwnState(state, ownProps.instanceProps);
    return {
        todos: getVisibleTodos(ownState.todos, ownState.visibilityFilter)
    };
};

const mapDispatchToProps = (stateProps, dispatch, ownProps) => {
    let { instanceId } = ownProps.instanceProps;
    return {
        onTodoClick: id => {
            dispatch(toggleTodo(instanceId, { id }));
        }
    };
};

export const VisibleTodoList = generateContainer(mapStateToProps, mapDispatchToProps)(TodoList);
