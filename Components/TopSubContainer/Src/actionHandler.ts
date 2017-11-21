import { addMiddleware } from "redux-dynamic-middlewares";
import { ActionMode } from "ReduxActionModeHelper";
import { addClickCount } from "./action";
import { REFRESH_GIT_INFO } from "GitInfoSubContainer";
import { ON_ADD_CLICK } from "AddTodoContainer";

const actionHandlerMiddleware = ({ dispatch }) => next => async action => {
    next(action);
    const type = action.type;
    const targetMode = action.targetMode;
    const instanceId = action.instanceId;
    if (
        (type === REFRESH_GIT_INFO || type === ON_ADD_CLICK) &&
        targetMode !== ActionMode.InstanceOnly
    ) {
        dispatch(addClickCount(instanceId, targetMode)());
    }
};

addMiddleware(actionHandlerMiddleware);
