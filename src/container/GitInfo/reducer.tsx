import * as iassign from 'immutable-assign';
import { combineReducers } from 'redux';
import { STATE_PROP } from '../Async';
import { REFRESH, FETCH_GIT_INFO, FETCH_GIT_INFO_SUCCESS, FETCH_GIT_INFO_FAILED } from '../GitInfo';
import { RegisterToRootReducer } from '../../RootReducer';

const refreshCount = (refreshCount = {count: 0}, action) => {
  switch (action.type) {
    case REFRESH:
      return iassign(refreshCount, (obj) => {
        obj.count++;
        return obj;
      });
    default:
      return iassign(refreshCount, (obj) => {
        obj.count = 0;
        return obj;
      });
  }
};

const gitSize = (gitSize = 0, action) => {
  switch (action.type) {
    case FETCH_GIT_INFO:
      return 'fetching git info';
    case FETCH_GIT_INFO_SUCCESS:
      console.log(gitSize);
      console.log(action.data);
      return 100;
    case FETCH_GIT_INFO_FAILED:
      console.log(action.error);
      return 'error';
    default:
      return 0;
  }
}

const GetInfoReducer = combineReducers({
    gitSize,
    refreshCount,
});

RegisterToRootReducer(STATE_PROP, GetInfoReducer);
