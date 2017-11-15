"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReduxActionCreatorHelper_1 = require("ReduxActionCreatorHelper");
// Action Type
exports.REFRESH_GIT_INFO = "REFRESH_GIT_INFO";
exports.FETCH_GIT_INFO = "FETCH_GIT_INFO";
exports.FETCH_GIT_INFO_SUCCESS = "FETCH_GIT_INFO_SUCCESS";
exports.FETCH_GIT_INFO_FAILED = "FETCH_GIT_INFO_FAILED";
// Action Creator
exports.refreshGitInfo = ReduxActionCreatorHelper_1.generateInstanceActionCreator(exports.REFRESH_GIT_INFO);
exports.fetchGitInfo = ReduxActionCreatorHelper_1.generateInstanceActionCreator(exports.FETCH_GIT_INFO);
exports.fetchGitInfoSuccess = ReduxActionCreatorHelper_1.generateInstanceActionCreator(exports.FETCH_GIT_INFO_SUCCESS);
exports.fetchGitInfoFailed = ReduxActionCreatorHelper_1.generateInstanceActionCreator(exports.FETCH_GIT_INFO_FAILED);
