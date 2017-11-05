import { generateInstanceActionCreator } from "ActionCreatorHelper";

// Action Type
export const ADD_TODO: string = "ADD_TODO";
export const CHANGE_INPUT_TEXT: string = "CHANGE_INPUT_TEXT";
export const INIT_INPUT_INFO: string = "INIT_INPUT_INFO";

// Action Creator
export const addTodo = generateInstanceActionCreator(ADD_TODO);
export const changeInputText = generateInstanceActionCreator(CHANGE_INPUT_TEXT);
export const initInputInfo = generateInstanceActionCreator(INIT_INPUT_INFO);
