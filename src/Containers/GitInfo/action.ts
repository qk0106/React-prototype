import { instanceActionCreator } from "Instantiator";

// Action Type
export const REFRESH_GIT_INFO: string = "REFRESH_GIT_INFO";
export const FETCH_GIT_INFO: string = "FETCH_GIT_INFO";
export const FETCH_GIT_INFO_SUCCESS: string = "FETCH_GIT_INFO_SUCCESS";
export const FETCH_GIT_INFO_FAILED: string = "FETCH_GIT_INFO_FAILED";

// Action Creator
export const refreshGitInfo = instanceActionCreator(REFRESH_GIT_INFO);
export const fetchGitInfo = instanceActionCreator(FETCH_GIT_INFO);
export const fetchGitInfoSuccess = instanceActionCreator(FETCH_GIT_INFO_SUCCESS);
export const fetchGitInfoFailed = instanceActionCreator(FETCH_GIT_INFO_FAILED);
