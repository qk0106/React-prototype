"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReactInitComponentWrapper_1 = require("ReactInitComponentWrapper");
var ReduxConnectComponentWrapper_1 = require("ReduxConnectComponentWrapper");
var action_1 = require("./action");
var GitSize_1 = require("GitSize");
var stateProps = function (ownState, ownProps) { return ({
    refreshCount: ownState.refreshCount !== undefined ? ownState.refreshCount : { count: 0 },
    gitSize: ownState.gitSize !== undefined ? ownState.gitSize : 0,
    gitUrl: ownProps.gitUrl
}); };
var dispatchProps = function (dispatch, instanceId, ownProps, stateProps) { return ({
    init: function () {
        dispatch(action_1.refreshGitInfo(instanceId, { gitUrl: ownProps.gitUrl }));
    },
    onClick: function () {
        dispatch(action_1.refreshGitInfo(instanceId, { gitUrl: ownProps.gitUrl }));
    }
}); };
exports.GitInfo = ReduxConnectComponentWrapper_1.wrapWithConnect({ stateProps: stateProps, dispatchProps: dispatchProps }, ReactInitComponentWrapper_1.wrapWithInit(GitSize_1.GitSize));
