import { addMiddleware } from "redux-dynamic-middlewares";
import { addClickCount } from "./action";
import { ON_REFRESH_CLICK } from "GitInfoSubContainer";
import { ON_ADD_CLICK } from "AddTodoContainer";

const actionHandlerMiddleware = ({ dispatch }) => next => async action => {
    next(action);
    const type = action.type;
    const instanceId = action.instanceId;
    if (type === ON_REFRESH_CLICK || type === ON_ADD_CLICK) {
        dispatch(addClickCount(instanceId)());
    }
};

addMiddleware(actionHandlerMiddleware);
