"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var action_1 = require("./action"); // To get Action Creators
var Link_1 = require("Link");
var ReduxConnectComponentWrapper_1 = require("ReduxConnectComponentWrapper");
var stateProps = function (ownState, ownProps) { return ({
    active: ownProps.filter === ownState.visibilityFilter,
    children: ownProps.children
}); };
var dispatchProps = function (dispatch, instanceId, ownProps, stateProps) { return ({
    onClick: function () {
        dispatch(action_1.setVisibilityFilter(instanceId, { filter: ownProps.filter }));
    }
}); };
exports.TodoFilterLink = ReduxConnectComponentWrapper_1.wrapWithConnect({ stateProps: stateProps, dispatchProps: dispatchProps }, Link_1.Link);
