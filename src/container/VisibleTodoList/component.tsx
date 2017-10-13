import { connect } from 'react-redux';
import { toggleTodo } from './action';
import { TodoList } from '../../presenter/TodoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter((t) => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter((t) => !t.completed);
  }
};

const mapStateToProps = (state, ownProps) => {
  let ownState = state[ownProps.stateProp];
  return {
    todos: getVisibleTodos(ownState.todos, ownState.visibilityFilter),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => { dispatch(toggleTodo(id)); },
  };
};

export const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
