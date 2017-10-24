import { instanceActionCreator } from "Instantiator";

// Action Type
export const SET_VISIBILITY_FILTER: string = "SET_VISIBILITY_FILTER";

// Action Creator
export const setVisibilityFilter = instanceActionCreator(SET_VISIBILITY_FILTER);