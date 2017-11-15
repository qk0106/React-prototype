import { generateInstanceActionCreator } from "ReduxActionCreatorHelper";

// Action Type
export const SET_VISIBILITY_FILTER: string = "SET_VISIBILITY_FILTER";

// Action Creator
export const setVisibilityFilter = generateInstanceActionCreator(SET_VISIBILITY_FILTER);
