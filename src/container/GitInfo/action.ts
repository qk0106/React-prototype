import { InstanceActionCreator } from '../../global/instantiation';

// Action Type
export const REFRESH_GIT_INFO: string = 'REFRESH_GIT_INFO';
export const FETCH_GIT_INFO: string = 'FETCH_GIT_INFO';
export const FETCH_GIT_INFO_SUCCESS: string = 'FETCH_GIT_INFO_SUCCESS';
export const FETCH_GIT_INFO_FAILED: string = 'FETCH_GIT_INFO_FAILED';

// Action Creator
export const refreshGitInfo = InstanceActionCreator(REFRESH_GIT_INFO, ['gitUrl']);
export const fetchGitInfo = InstanceActionCreator(FETCH_GIT_INFO);
export const fetchGitInfoSuccess = InstanceActionCreator(FETCH_GIT_INFO_SUCCESS, ['data']);
export const fetchGitInfoFailed = InstanceActionCreator(FETCH_GIT_INFO_FAILED, ['error']);
