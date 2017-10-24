import { instanceActionCreator } from "../../Global/Instantiation";

// Action Type
export const TOGGLE_TODO: string = "TOGGLE_TODO";

// Action Creator
export const toggleTodo = instanceActionCreator(TOGGLE_TODO);
