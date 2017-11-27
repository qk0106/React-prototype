import { generateInstanceActionCreator } from "ReduxActionCreatorHelper";

// Action Type
export const ON_ADD_CLICK: string = "ON_ADD_CLICK";
export const ADD_TODO: string = "ADD_TODO";
export const CHANGE_INPUT_TEXT: string = "CHANGE_INPUT_TEXT";
export const INIT_INPUT_INFO: string = "INIT_INPUT_INFO";

// Action Creator
export const onAddClick = generateInstanceActionCreator(ON_ADD_CLICK);
export const addTodo = generateInstanceActionCreator(ADD_TODO);
export const changeInputText = generateInstanceActionCreator(CHANGE_INPUT_TEXT);
export const initInputInfo = generateInstanceActionCreator(INIT_INPUT_INFO);
