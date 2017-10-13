import * as iassign from 'immutable-assign';
import { combineReducers } from 'redux';
import { STATE_PROP } from './const';
import { ADD_TODO } from '../AddTodo';
import { TOGGLE_TODO } from '../VisibleTodoList';
import { SET_VISIBILITY_FILTER } from '../TodoFilterLink';
import { RegisterToRootReducer } from '../../RootReducer';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

const { SHOW_ALL } = VisibilityFilters

const visibilityFilter = (visibilityFilter = SHOW_ALL, action): string => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return visibilityFilter
  }
}

const todos = (todos = [], action): any[] => {
  switch (action.type) {
    case ADD_TODO:
      return iassign(todos, (arr) => {
        arr.push({
          id: action.id,
          text: action.text,
          completed: false
        });
        return arr;
      });
    case TOGGLE_TODO:
      return iassign(todos, (arr) => {
        arr[action.id].completed = !arr[action.id].completed;
        return arr;
      });
    default:
      return todos
  }
}

const TodoListAppReducer = combineReducers({
    visibilityFilter,
    todos
})

RegisterToRootReducer(STATE_PROP, TodoListAppReducer);
