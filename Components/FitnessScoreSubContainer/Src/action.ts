import { generateInstanceActionCreator } from "ReduxActionCreatorHelper";

// Action Type
export const ADD_FITNESS_SCORE: string = "ADD_FITNESS_SCORE";

// Action Creator
export const addFitnessScore = generateInstanceActionCreator(ADD_FITNESS_SCORE);
