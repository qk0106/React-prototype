import { instanceActionCreator } from "Instantiator";

// Action Type
export const TOGGLE_TODO: string = "TOGGLE_TODO";

// Action Creator
export const toggleTodo = instanceActionCreator(TOGGLE_TODO);
