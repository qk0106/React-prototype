import { doFetch } from "FetchHelper";
import { addMiddleware } from "redux-dynamic-middlewares";
import { REFRESH_GIT_INFO, fetchGitInfo, fetchGitInfoSuccess, fetchGitInfoFailed } from "./action"; // To get Action Creators

const actionHandlerMiddleware = ({ dispatch }) => next => async action => {
    next(action);
    const type = action.type;
    const instanceId = action.instanceId;
    if (type === REFRESH_GIT_INFO) {
        dispatch(fetchGitInfo(instanceId)());
        try {
            let data = await doFetch(action.gitUrl);
            dispatch(fetchGitInfoSuccess(instanceId)({ data }));
        } catch (error) {
            dispatch(fetchGitInfoFailed(instanceId)({ error }));
        }
    }
};

addMiddleware(actionHandlerMiddleware);
