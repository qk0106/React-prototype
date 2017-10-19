import { InstanceActionCreator } from '../../global/instantiation';
// Action Type
export const TOGGLE_TODO: string = 'TOGGLE_TODO';

// Action Creator
// export const toggleTodo = (id) => {
//     return { type: TOGGLE_TODO, id }
// }
export const toggleTodo = InstanceActionCreator(TOGGLE_TODO, 'id');
