import { RegisterToRootMiddlewares } from '../../RootMiddlewares';
import { REFRESH_GIT_INFO, fetchGitInfo, fetchGitInfoSuccess, fetchGitInfoFailed } from './action';

const actionHandlerMiddleware = ({ dispatch }) => next => action => {
    next(action);
    if (action.type === REFRESH_GIT_INFO) {
      dispatch(
        fetchGitInfo(action.instanceId)
      );
      fetch(action.gitUrl).then((res)=> {
        res.json().then((data) => {
          dispatch(
            fetchGitInfoSuccess(action.instanceId, data)
          );
        });
      }, (error) => {
        dispatch(
          fetchGitInfoFailed(action.instanceId, error)
        );
      })
    }
}

RegisterToRootMiddlewares(actionHandlerMiddleware);
