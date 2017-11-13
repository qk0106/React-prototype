import { doFetch } from "FetchHelper";
import { addMiddleware } from "redux-dynamic-middlewares";
import { INIT_INPUT_INFO, changeInputText } from "AddTodo";
const actionHandlerMiddleware = ({ dispatch }) => next => async action => {
    next(action);
    if (action.type === INIT_INPUT_INFO) {
        let instanceId = action.instanceId;
        try {
            let data = await doFetch(action.gitUrl);
            let sizeInfo = data.size;
            dispatch(changeInputText(instanceId, { text: sizeInfo }));
        } catch (error) {
            let errorMessage = "Error";
            dispatch(changeInputText(instanceId, { text: errorMessage }));
        }
    }
};

addMiddleware(actionHandlerMiddleware);
