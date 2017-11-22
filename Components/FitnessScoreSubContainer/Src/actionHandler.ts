import { addMiddleware } from "redux-dynamic-middlewares";
import { addFitnessScore } from "./action";
import { FETCH_GIT_INFO_SUCCESS } from "GitInfoSubContainer";
import { ADD_TODO } from "AddTodoContainer";

const actionHandlerMiddleware = ({ dispatch }) => next => async action => {
    next(action);
    const type = action.type;
    const instanceId = action.instanceId;
    if (type === FETCH_GIT_INFO_SUCCESS)
        dispatch(addFitnessScore(instanceId)({ score: action.data.size }));
    if (type === ADD_TODO) dispatch(addFitnessScore(instanceId)({ score: action.text }));
};

addMiddleware(actionHandlerMiddleware);
