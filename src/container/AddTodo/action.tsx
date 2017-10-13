// Action Type
export const ADD_TODO: string = 'ADD_TODO';

// Action Creator
let nextTodoId = 0;
export const addTodo = (text) => {
    return { type: ADD_TODO, id: nextTodoId++, text };
}