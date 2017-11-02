import { REFRESH_GIT_INFO, fetchGitInfo, fetchGitInfoSuccess, fetchGitInfoFailed } from "./action"; // To get Action Creators
import { registerToRootMiddlewares } from "RouteHelper";

const actionHandlerMiddleware = ({ dispatch }) => next => async action => {
    next(action);
    if (action.type === REFRESH_GIT_INFO) {
        let instanceId = action.instanceId;
        dispatch(fetchGitInfo(instanceId));
        try {
            let res = await fetch(action.gitUrl);
            let data = await res.json();
            dispatch(fetchGitInfoSuccess(instanceId, { data }));
        } catch (error) {
            dispatch(fetchGitInfoFailed(instanceId, { error }));
        }
    }
};

registerToRootMiddlewares(actionHandlerMiddleware);
