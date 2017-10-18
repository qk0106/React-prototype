import { RegisterToRootMiddlewares } from '../../RootMiddlewares';
import { REFRESH_GIT_INFO, fetchGitInfo, fetchGitInfoSuccess, fetchGitInfoFailed } from './action';

const actionHandlerMiddleware = ({ dispatch }) => next => action => {
    next(action);
    if (action.type === REFRESH_GIT_INFO) {
      dispatch(
        fetchGitInfo()
      );
      fetch("https://api.github.com/repos/qk0106/React-prototype").then((res)=> {
        res.json().then((data) => {
          dispatch(
            fetchGitInfoSuccess(data)
          );
        });
      }, (error) => {
        dispatch(
          fetchGitInfoFailed(error)
        );
      })
    }
}

RegisterToRootMiddlewares(actionHandlerMiddleware);
