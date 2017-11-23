import { generateInstanceActionCreator } from "ReduxActionCreatorHelper";

// Action Type
export const ON_SELECT: string = "ON_SELECTED";

// Action Creator
export const onSelect = generateInstanceActionCreator(ON_SELECT);
