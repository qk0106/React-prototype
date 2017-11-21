import { doFetch } from "FetchHelper";
import { addMiddleware } from "redux-dynamic-middlewares";
import { INIT_INPUT_INFO, changeInputText, addTodo } from "./action";
import { BROADCAST, ActionMode } from "ReduxActionModeHelper";

const actionHandlerMiddleware = ({ dispatch }) => next => async action => {
    next(action);
    if (action.type === INIT_INPUT_INFO) {
        let instanceId = action.instanceId;
        try {
            let data = await doFetch(action.gitUrl);
            let sizeInfo = data.size;
            dispatch(changeInputText(instanceId)({ text: sizeInfo }));
        } catch (error) {
            let errorMessage = "Error";
            dispatch(changeInputText(instanceId)({ text: errorMessage }));
        }
    }
    if (action.type === BROADCAST) {
        if (action.gitSize)
            dispatch(addTodo(action.instanceId, ActionMode.Broadcast)({ text: action.gitSize }));
    }
};

addMiddleware(actionHandlerMiddleware);
