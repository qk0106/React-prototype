import { doFetch } from "FetchHelper";
import { addMiddleware } from "redux-dynamic-middlewares";
import {
    REFRESH_GIT_INFO,
    ON_REFRESH_CLICK,
    refreshGitInfo,
    fetchGitInfo,
    fetchGitInfoSuccess,
    fetchGitInfoFailed
} from "./action"; // To get Action Creators

const actionHandlerMiddleware = ({ dispatch }) => next => async action => {
    next(action);
    const type = action.type;
    const instanceId = action.instanceId;
    if (type === ON_REFRESH_CLICK) {
        dispatch(refreshGitInfo(instanceId)({ gitUrl: action.gitUrl }));
    }
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
