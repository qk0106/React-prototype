import { RegisterToRootMiddlewares } from '../../RootMiddlewares';
import { REFRESH_GIT_INFO, fetchGitInfo, fetchGitInfoSuccess, fetchGitInfoFailed } from './action';

const actionHandlerMiddleware = store => next => action => {
    let { dispatch } = store;
    if (action.type === REFRESH_GIT_INFO) {
      dispatch(
        // {type: FETCH_GIT_INFO}
        fetchGitInfo()
      );
      fetch("https://api.github.com/repos/qk0106/React-prototype").then((res)=> {
        res.json().then((data) => {
          dispatch(
            // {type: FETCH_GIT_INFO_SUCCESS, data}
            fetchGitInfoSuccess(data)
          );
        });
      }, (error) => {
        dispatch(
          // { type: FETCH_GIT_INFO_FAILED, error}
          fetchGitInfoFailed(error)
        );
      })
    }
    return next(action);;
}

RegisterToRootMiddlewares(actionHandlerMiddleware);