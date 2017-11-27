import { generateInstanceActionCreator } from "ReduxActionCreatorHelper";

// Action Type
export const ON_REFRESH_CLICK: string = "ON_REFRESH_CLICK";
export const REFRESH_GIT_INFO: string = "REFRESH_GIT_INFO";
export const FETCH_GIT_INFO: string = "FETCH_GIT_INFO";
export const FETCH_GIT_INFO_SUCCESS: string = "FETCH_GIT_INFO_SUCCESS";
export const FETCH_GIT_INFO_FAILED: string = "FETCH_GIT_INFO_FAILED";

// Action Creator
export const onRefreshClick = generateInstanceActionCreator(ON_REFRESH_CLICK);
export const refreshGitInfo = generateInstanceActionCreator(REFRESH_GIT_INFO);
export const fetchGitInfo = generateInstanceActionCreator(FETCH_GIT_INFO);
export const fetchGitInfoSuccess = generateInstanceActionCreator(FETCH_GIT_INFO_SUCCESS);
export const fetchGitInfoFailed = generateInstanceActionCreator(FETCH_GIT_INFO_FAILED);
