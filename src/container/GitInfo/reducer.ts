import * as iassign from 'immutable-assign';
import { combineReducers } from 'redux';
import { REFRESH_GIT_INFO, FETCH_GIT_INFO, FETCH_GIT_INFO_SUCCESS, FETCH_GIT_INFO_FAILED } from '../GitInfo';

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
};

export const GitInfoReducer = combineReducers({
    gitSize,
    refreshCount,
});
