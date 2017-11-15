"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var action_1 = require("./action"); // To get Action Creators
var LinkPresenter_1 = require("LinkPresenter");
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
exports.TodoFilterLinkContainer = ReduxConnectComponentWrapper_1.wrapWithConnect(stateProps, dispatchProps, LinkPresenter_1.LinkPresenter);
