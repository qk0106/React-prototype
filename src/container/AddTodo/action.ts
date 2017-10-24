import { InstanceActionCreator } from "../../Global/instantiation";

// Action Type
export const ADD_TODO: string = "ADD_TODO";
export const CHANGE_INPUT_TEXT: string = "CHANGE_INPUT_TEXT";

// Action Creator
export const addTodo = InstanceActionCreator(ADD_TODO, ["text"]);
export const changeInputText = InstanceActionCreator(CHANGE_INPUT_TEXT, ["text"]);
