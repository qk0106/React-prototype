// Action Type
export const ADD_TODO: string = 'ADD_TODO';

// Action Creator
let nextTodoId = 0;
export const addTodo = (instanceId, text) => ({
    type: ADD_TODO,
    id: nextTodoId++,
    instanceId,
    text,
});