import { generateInstanceActionCreator } from "Instantiator";

// Action Type
export const ADD_TODO: string = "ADD_TODO";
export const CHANGE_INPUT_TEXT: string = "CHANGE_INPUT_TEXT";

// Action Creator
export const addTodo = generateInstanceActionCreator(ADD_TODO);
export const changeInputText = generateInstanceActionCreator(CHANGE_INPUT_TEXT);
