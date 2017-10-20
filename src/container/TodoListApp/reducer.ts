import { ADD_TODO, CHANGE_INPUT_TEXT } from '../AddTodo/action'; // To get Action Types
import { TOGGLE_TODO } from '../VisibleTodoList/action'; // To get Action Types
import { SET_VISIBILITY_FILTER } from '../TodoFilterLink/action'; // To get Action Types
import { InstancesInitStateCreator, InstancesReducerCreator } from '../../global/instantiation';
import { RegisterToRootReducer } from '../../RootReducer';
import { combineReducers } from 'redux';
import * as iassign from 'immutable-assign';

const TodoListAppInit = {
    inputText: '',
    visibilityFilter: 'SHOW_ALL',
    todos: [],
};

const inputText = (inputText = TodoListAppInit.inputText, action) => {
    switch (action.type) {
        case CHANGE_INPUT_TEXT:
            return action.inputText;
        default:
            return inputText;
    }
}

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
// // Same functionality as:
// const TodoListAppReducer = (TodoListApp, action) => ({
//     inputText: inputText(TodoListApp.gitSize, action),
//     visibilityFilter: visibilityFilter(TodoListApp.refreshCount, action),
//     todos: todos(TodoListApp.todos, action),
// });

const TodoListAppsInit = InstancesInitStateCreator(TodoListAppInit, ['TodoList_1', 'TodoList_2']);
const TodoListAppsReducer = InstancesReducerCreator(TodoListAppsInit, TodoListAppReducer);

RegisterToRootReducer('TodoLists', TodoListAppsReducer);
