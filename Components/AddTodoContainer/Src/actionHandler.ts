import { registerMiddleware } from "ReduxMiddlewareManager";

import { doFetch } from "FetchHelper";
import { INIT_INPUT_INFO, ON_ADD_CLICK, changeInputText, addTodo } from "./action";
import { FETCH_GIT_INFO_SUCCESS } from "GitInfoContainer";

const actionHandlerMiddleware = ({ dispatch }) => next => async action => {
    next(action);
    const type = action.type;
    const instanceId = action.instanceId;
    if (type === INIT_INPUT_INFO) {
        try {
            let data = await doFetch(action.gitUrl, "json");
            let sizeInfo = data.size;
            dispatch(changeInputText(instanceId)({ text: sizeInfo }));
        } catch (error) {
            let errorMessage = "Error";
            dispatch(changeInputText(instanceId)({ text: errorMessage }));
        }
    }
    if (type === ON_ADD_CLICK) {
        dispatch(addTodo(instanceId)({ text: action.text }));
        dispatch(changeInputText(instanceId)({ text: "" }));
    }
    if (type === FETCH_GIT_INFO_SUCCESS) {
        if (action.data && action.data.size)
            dispatch(addTodo(instanceId)({ text: action.data.size }));
    }
};

registerMiddleware(actionHandlerMiddleware);
