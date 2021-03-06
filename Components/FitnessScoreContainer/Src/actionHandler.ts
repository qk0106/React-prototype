import { registerMiddleware } from "ReduxMiddlewareManager";

import { addFitnessScore } from "./action";
import { ADD_TODO } from "AddTodoContainer";
import { FETCH_GIT_INFO_SUCCESS } from "GitInfoContainer";

const actionHandlerMiddleware = ({ dispatch }) => next => async action => {
    next(action);
    const type = action.type;
    const instanceId = action.instanceId;
    if (type === FETCH_GIT_INFO_SUCCESS)
        dispatch(addFitnessScore(instanceId)({ score: action.data.size }));
    if (type === ADD_TODO) dispatch(addFitnessScore(instanceId)({ score: action.text }));
};

registerMiddleware(actionHandlerMiddleware);
