import { toggleTodo } from "./action"; // To get Action Creators
import { TodoList } from "../../presenter";
import { connect } from "react-redux";

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

const mapStateToProps = (state, { instancesProp, instanceId }) => {
    let ownState = state[instancesProp][instanceId];
    return {
        todos: getVisibleTodos(ownState.todos, ownState.visibilityFilter)
    };
};

const mapDispatchToProps = ({}, dispatch, { instanceId }) => {
    return {
        onTodoClick: id => {
            dispatch(toggleTodo(instanceId, [id]));
        }
    };
};

const mergeProps = (stateProps, { dispatch }, ownProps) => {
    return {
        ...stateProps,
        ...mapDispatchToProps(stateProps, dispatch, ownProps)
    };
};

export const VisibleTodoList = connect(mapStateToProps, null, mergeProps)(TodoList);
