"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReactInitComponentWrapper_1 = require("ReactInitComponentWrapper");
var ReduxConnectComponentWrapper_1 = require("ReduxConnectComponentWrapper");
var action_1 = require("./action"); // To get Action Creators
var AddTodoPresenter_1 = require("AddTodoPresenter");
var stateProps = function (ownState, ownProps) { return ({
    inputText: ownState.inputText !== undefined ? ownState.inputText : ownProps.inputText
}); };
var dispatchProps = function (dispatch, instanceId, ownProps, stateProps) { return ({
    init: function () {
        dispatch(action_1.initInputInfo(instanceId, {
            gitUrl: "https://api.github.com/repos/qk0106/React-prototype"
        }));
    },
    onSubmit: function (e) {
        e.preventDefault();
        dispatch(action_1.addTodo(instanceId, { text: stateProps.inputText }));
        dispatch(action_1.changeInputText(instanceId, { text: "" }));
    },
    onChange: function (e) {
        dispatch(action_1.changeInputText(instanceId, { text: e.target.value }));
    }
}); };
exports.AddTodoContainer = ReduxConnectComponentWrapper_1.wrapWithConnect(stateProps, dispatchProps, ReactInitComponentWrapper_1.wrapWithInit(AddTodoPresenter_1.AddTodoPresenter));
