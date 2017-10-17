import * as iassign from 'immutable-assign';
import { combineReducers } from 'redux';
import { STATE_PROP } from '../Async';
import { REFRESH_GIT_INFO, FETCH_GIT_INFO, FETCH_GIT_INFO_SUCCESS, FETCH_GIT_INFO_FAILED } from '../GitInfo';
import { RegisterToRootReducer } from '../../RootReducer';
import { RegisterToRootMiddlewares } from '../../RootMiddlewares';

const refreshCount = (refreshCount = {count: 0}, action) => {
  switch (action.type) {
    case REFRESH_GIT_INFO:
      return iassign(refreshCount, (obj) => {
        obj.count++;
        return obj;
      });
    default:
      return refreshCount;
  }
};

const gitSize = (gitSize = 0, action) => {
  switch (action.type) {
    case FETCH_GIT_INFO:
      return 'fetching git info';
    case FETCH_GIT_INFO_SUCCESS:
      return action.data.size;
    case FETCH_GIT_INFO_FAILED:
      return 'error';
    default:
      return gitSize;
  }
}

const actionHandlerMiddleware = store => next => action => {
  let result = next(action);
  if (action.type == "REFRESH_GIT_INFO") {
    store.dispatch({type: "FETCH_GIT_INFO"});
    fetch("https://api.github.com/repos/qk0106/React-prototype").then((res)=> {
      res.json().then((data) => {
        store.dispatch({type: "FETCH_GIT_INFO_SUCCESS", data});
      });
    }, (error) => {
      store.dispatch({ type: "FETCH_GIT_INFO_FAILED", error});
    })
  }
  return result;
}


const GetInfoReducer = combineReducers({
    gitSize,
    refreshCount,
});

RegisterToRootReducer(STATE_PROP, GetInfoReducer);
RegisterToRootMiddlewares(actionHandlerMiddleware);

