"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReduxActionCreatorHelper_1 = require("ReduxActionCreatorHelper");
// Action Type
exports.SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";
// Action Creator
exports.setVisibilityFilter = ReduxActionCreatorHelper_1.generateInstanceActionCreator(exports.SET_VISIBILITY_FILTER);
