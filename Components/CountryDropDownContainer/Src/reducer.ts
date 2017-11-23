import { ADD_FITNESS_SCORE } from "FitnessScoreSubContainer"; // To get Action Types

const fitnessScoreCounter = (fitnessScoreCounter = 0, action) => {
    switch (action.type) {
        case ADD_FITNESS_SCORE:
            let score = Number(action.score);
            if (score === NaN) score = 0;
            return fitnessScoreCounter + score;
        default:
            return fitnessScoreCounter;
    }
};

export const reducer = {
    fitnessScoreCounter
};
