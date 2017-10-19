import * as iassign from 'immutable-assign';
import { REFRESH_GIT_INFO, FETCH_GIT_INFO, FETCH_GIT_INFO_SUCCESS, FETCH_GIT_INFO_FAILED } from '../GitInfo';
import { RegisterToRootReducer } from '../../RootReducer';

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
  instanceId: GitInfo.instanceId,
  gitSize: gitSize(GitInfo.gitSize, action),
  refreshCount: refreshCount(GitInfo.refreshCount, action),
});

const GitInfosInit = {
  Async_1: {
    gitSize: 0,
    refreshCount: {count: 0},
  },
  Async_2: {
    gitSize: 0,
    refreshCount: {count: 0},
  }
}

const GitInfosReducer = (GitInfos = GitInfosInit, action) => {
  if(!(action.instanceId in GitInfos)) return GitInfos;
  const GitInfo = GitInfos[action.instanceId];
  const updatedGitInfo = GitInfoReducer(GitInfo, action);
  return {
    ...GitInfos,
    [action.instanceId]: updatedGitInfo
  };
};

RegisterToRootReducer('GitInfos', GitInfosReducer);
