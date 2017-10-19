import { REFRESH_GIT_INFO, FETCH_GIT_INFO, FETCH_GIT_INFO_SUCCESS, FETCH_GIT_INFO_FAILED } from './action'; // To get Action Types
import { InstancesInitStateCreator, InstancesReducerCreator } from '../../global';
import { RegisterToRootReducer } from '../../RootReducer';
import * as iassign from 'immutable-assign';

const refreshCount = (refreshCount, action) => {
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

const gitSize = (gitSize, action) => {
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

const GitInfoReducer = (GitInfo, action) => ({
  gitSize: gitSize(GitInfo.gitSize, action),
  refreshCount: refreshCount(GitInfo.refreshCount, action),
});

const GitInfoInit = {
  gitSize: 0,
  refreshCount: {count: 0},
};

const GitInfosInit = InstancesInitStateCreator(GitInfoInit, ['Async_1', 'Async_2']);

RegisterToRootReducer('GitInfos', InstancesReducerCreator(GitInfosInit, GitInfoReducer));
