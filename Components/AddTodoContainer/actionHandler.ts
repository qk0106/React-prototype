import { doFetch } from "FetchHelper";
import { addMiddleware } from "redux-dynamic-middlewares";
import { INIT_INPUT_INFO, changeInputText, addTodo } from "./action";
import { ActionMode } from "ReduxActionModeHelper";

import { FETCH_GIT_INFO_SUCCESS } from "GitInfoSubContainer";

const actionHandlerMiddleware = ({ dispatch }) => next => async action => {
    next(action);
    const type = action.type;
    const targetMode = action.targetMode;
    const instanceId = action.instanceId;
    if (type === INIT_INPUT_INFO) {
        try {
            let data = await doFetch(action.gitUrl);
            let sizeInfo = data.size;
            dispatch(changeInputText(instanceId)({ text: sizeInfo }));
        } catch (error) {
            let errorMessage = "Error";
            dispatch(changeInputText(instanceId)({ text: errorMessage }));
        }
    }
    if (type === FETCH_GIT_INFO_SUCCESS && targetMode !== ActionMode.InstanceOnly) {
        if (action.data && action.data.size)
            dispatch(addTodo(instanceId, targetMode)({ text: action.data.size }));
    }
};

addMiddleware(actionHandlerMiddleware);
