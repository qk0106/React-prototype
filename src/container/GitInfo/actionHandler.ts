import { REFRESH_GIT_INFO, fetchGitInfo, fetchGitInfoSuccess, fetchGitInfoFailed } from './action'; // To get Action Creators
import { RegisterToRootMiddlewares } from '../../RootMiddlewares';

const actionHandlerMiddleware = ({ dispatch }) => next => action => {
    next(action);
    if (action.type === REFRESH_GIT_INFO) {
        let instancesProp = action.instancesProp;
        let instanceId = action.instanceId;
        dispatch(
            fetchGitInfo(instancesProp, instanceId)
        );
        fetch(action.gitUrl).then((res) => {
            res.json().then((data) => {
                dispatch(
                    fetchGitInfoSuccess(instancesProp, instanceId, [data])
                );
            });
        }, (error) => {
            dispatch(
                fetchGitInfoFailed(instancesProp, instanceId, [error])
            );
        })
    }
}

RegisterToRootMiddlewares(actionHandlerMiddleware);
