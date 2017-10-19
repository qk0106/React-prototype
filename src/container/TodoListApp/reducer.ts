import { InstancesInitStateCreator, InstancesReducerCreator } from '../../global/instantiation';
import * as iassign from 'immutable-assign';
import { combineReducers } from 'redux';
// import { STATE_PROP } from './const';
import { ADD_TODO } from '../AddTodo';
import { TOGGLE_TODO } from '../VisibleTodoList';
import { SET_VISIBILITY_FILTER } from '../TodoFilterLink';
import { RegisterToRootReducer } from '../../RootReducer';

const TodoListAppInit = {
    visibilityFilter: 'SHOW_ALL',
    todos: [],
};

const visibilityFilter = (visibilityFilter = TodoListAppInit.visibilityFilter, action): string => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return visibilityFilter
    }
};

const todos = (todos = TodoListAppInit.todos, action): any[] => {
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
};

const TodoListAppReducer = combineReducers({
    visibilityFilter,
    todos
});

const TodoListAppsInit = InstancesInitStateCreator(TodoListAppInit, ['TodoList_1', 'TodoList_2']);
const TodoListAppsReducer = InstancesReducerCreator(TodoListAppsInit, TodoListAppReducer);

RegisterToRootReducer('TodoLists', TodoListAppsReducer);

// RegisterToRootReducer(STATE_PROP, TodoListAppReducer);
