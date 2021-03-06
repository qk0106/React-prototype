import { generateInstanceActionCreator } from "ReduxActionCreatorHelper";

// Action Type
export const TOGGLE_TODO: string = "TOGGLE_TODO";

// Action Creator
export const toggleTodo = generateInstanceActionCreator(TOGGLE_TODO);
