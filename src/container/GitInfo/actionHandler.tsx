import { RegisterToRootMiddlewares } from '../../RootMiddlewares';
import { REFRESH_GIT_INFO, FETCH_GIT_INFO, FETCH_GIT_INFO_SUCCESS, FETCH_GIT_INFO_FAILED } from './action';

const actionHandlerMiddleware = store => next => action => {
    let result = next(action);
    if (action.type === REFRESH_GIT_INFO) {
      store.dispatch({type: FETCH_GIT_INFO});
      fetch("https://api.github.com/repos/qk0106/React-prototype").then((res)=> {
        res.json().then((data) => {
          store.dispatch({type: FETCH_GIT_INFO_SUCCESS, data});
        });
      }, (error) => {
        store.dispatch({ type: FETCH_GIT_INFO_FAILED, error});
      })
    }
    return result;
}

RegisterToRootMiddlewares(actionHandlerMiddleware);