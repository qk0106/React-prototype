import { generateInstanceActionCreator } from "ReduxActionCreatorHelper";

// Action Type
export const ADD_CLICK_COUNT: string = "ADD_CLICK_COUNT";

// Action Creator
export const addClickCount = generateInstanceActionCreator(ADD_CLICK_COUNT);
