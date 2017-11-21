import { doFetch } from "FetchHelper";
import { addMiddleware } from "redux-dynamic-middlewares";
import { INIT_INPUT_INFO, changeInputText, addTodo } from "./action";
import { ActionMode } from "ReduxActionModeHelper";

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
    if (targetMode === ActionMode.Broadcast) {
        if (action.data && action.data.size)
            dispatch(addTodo(undefined, ActionMode.Broadcast)({ text: action.data.size }));
    }
};

addMiddleware(actionHandlerMiddleware);
