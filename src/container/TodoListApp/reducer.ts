import { ADD_TODO, CHANGE_INPUT_TEXT } from '../AddTodo/action'; // To get Action Types
import { TOGGLE_TODO } from '../VisibleTodoList/action'; // To get Action Types
import { SET_VISIBILITY_FILTER } from '../TodoFilterLink/action'; // To get Action Types
import { TodoListAppsProp } from './component';
import { InstancesReducerCreator } from '../../global/instantiation';
import { RegisterToRootReducer, FetchInstanceIdsObj } from '../../RootReducer';
import { combineReducers } from 'redux';
import * as iassign from 'immutable-assign';

const inputText = (inputText = '', action) => {
    switch (action.type) {
        case CHANGE_INPUT_TEXT:
            return action.inputText;
        default:
            return inputText;
    }
};

const visibilityFilter = (visibilityFilter = 'SHOW_ALL', action): string => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return visibilityFilter
    }
};

const todos = (todos = [], action): any[] => {
    switch (action.type) {
        case ADD_TODO:
            return iassign(
                todos,
                arr => {
                    let id = arr.length;
                    arr.push({
                        id: id,
                        text: action.text,
                        completed: false
                    });
                    return arr;
                }
            );
        case TOGGLE_TODO:
            return iassign(
                todos,
                (arr, ctx) => arr[ctx.id].completed,
                completed => !completed,
                { id: action.id, },
            );
        default:
            return todos
    }
};

const TodoListAppReducer = combineReducers({
    inputText,
    visibilityFilter,
    todos
});

const TodoListAppsReducer = InstancesReducerCreator(FetchInstanceIdsObj(TodoListAppsProp), TodoListAppReducer);

RegisterToRootReducer(TodoListAppsProp, TodoListAppsReducer);
