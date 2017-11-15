"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReduxActionCreatorHelper_1 = require("ReduxActionCreatorHelper");
// Action Type
exports.TOGGLE_TODO = "TOGGLE_TODO";
// Action Creator
exports.toggleTodo = ReduxActionCreatorHelper_1.generateInstanceActionCreator(exports.TOGGLE_TODO);
