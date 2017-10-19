import { InstanceActionCreator } from '../../global/instantiation';
// Action Type
export const ADD_TODO: string = 'ADD_TODO';

// Action Creator
export const addTodo = InstanceActionCreator(ADD_TODO, ['text', 'id']);
