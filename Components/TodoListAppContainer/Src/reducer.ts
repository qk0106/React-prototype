import * as iassign from "immutable-assign";
import { TOGGLE_TODO } from "TodoListContainer";
import { SET_VISIBILITY_FILTER } from "TodoFilterLinkContainer";
import { ADD_TODO, CHANGE_INPUT_TEXT } from "AddTodoContainer";

const inputText = (inputText = "", action) => {
    switch (action.type) {
        case CHANGE_INPUT_TEXT:
            return action.text;
        default:
            return inputText;
    }
};

const visibilityFilter = (visibilityFilter = "SHOW_ALL", action): string => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return visibilityFilter;
    }
};

const todos = (todos = [], action): any[] => {
    switch (action.type) {
        case ADD_TODO:
            return iassign(todos, arr => {
                let id = arr.length;
                arr.push({
                    id: id,
                    text: action.text,
                    completed: false
                });
                return arr;
            });
        case TOGGLE_TODO:
            return iassign(todos, (arr, ctx) => arr[ctx.id].completed, completed => !completed, {
                id: action.id
            });
        default:
            return todos;
    }
};

export const reducer = {
    inputText,
    visibilityFilter,
    todos
};
