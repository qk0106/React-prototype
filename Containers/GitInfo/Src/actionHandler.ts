import { doFetch } from "FetchHelper";
import { REFRESH_GIT_INFO, fetchGitInfo, fetchGitInfoSuccess, fetchGitInfoFailed } from "./action"; // To get Action Creators
import { addMiddleware } from "redux-dynamic-middlewares";
const actionHandlerMiddleware = ({ dispatch }) => next => async action => {
    next(action);
    if (action.type === REFRESH_GIT_INFO) {
        let instanceId = action.instanceId;
        dispatch(fetchGitInfo(instanceId));
        try {
            let data = await doFetch(action.gitUrl);
            dispatch(fetchGitInfoSuccess(instanceId, { data }));
        } catch (error) {
            dispatch(fetchGitInfoFailed(instanceId, { error }));
        }
    }
};

addMiddleware(actionHandlerMiddleware);
