"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReduxActionCreatorHelper_1 = require("ReduxActionCreatorHelper");
// Action Type
exports.ADD_TODO = "ADD_TODO";
exports.CHANGE_INPUT_TEXT = "CHANGE_INPUT_TEXT";
exports.INIT_INPUT_INFO = "INIT_INPUT_INFO";
// Action Creator
exports.addTodo = ReduxActionCreatorHelper_1.generateInstanceActionCreator(exports.ADD_TODO);
exports.changeInputText = ReduxActionCreatorHelper_1.generateInstanceActionCreator(exports.CHANGE_INPUT_TEXT);
exports.initInputInfo = ReduxActionCreatorHelper_1.generateInstanceActionCreator(exports.INIT_INPUT_INFO);
