import { registerMiddleware } from "ReduxMiddlewareManager";

import { doFetch } from "FetchHelper";
import {
    REFRESH_GIT_INFO,
    ON_REFRESH_CLICK,
    refreshGitInfo,
    fetchGitInfo,
    fetchGitInfoSuccess,
    fetchGitInfoFailed
} from "./action";

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
            let data = await doFetch(action.gitUrl, "json");
            dispatch(fetchGitInfoSuccess(instanceId)({ data }));
        } catch (error) {
            dispatch(fetchGitInfoFailed(instanceId)({ error }));
        }
    }
};

registerMiddleware(actionHandlerMiddleware);
