import { addMiddleware } from "redux-dynamic-middlewares";
import { addClickCount } from "./action";
import { REFRESH_GIT_INFO } from "GitInfoSubContainer";
import { ON_ADD_CLICK } from "AddTodoContainer";

const actionHandlerMiddleware = ({ dispatch }) => next => async action => {
    next(action);
    const type = action.type;
    const instanceId = action.instanceId;
    if (type === REFRESH_GIT_INFO || type === ON_ADD_CLICK) {
        dispatch(addClickCount(instanceId)());
    }
};

addMiddleware(actionHandlerMiddleware);
