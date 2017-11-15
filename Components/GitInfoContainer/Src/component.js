"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var reducer_1 = require("./reducer");
var ReactInstanceComponentWrapper_1 = require("ReactInstanceComponentWrapper");
var GitInfoSubContainer_1 = require("GitInfoSubContainer");
var GitInfo = function (_a) {
    var instanceProps = _a.instanceProps, gitUrl = _a.gitUrl;
    return (React.createElement("div", null,
        React.createElement(GitInfoSubContainer_1.GitInfoSubContainer, { instanceProps: instanceProps, gitUrl: gitUrl })));
};
exports.GitInfoContainer = ReactInstanceComponentWrapper_1.wrapWithInstance("GitInfoContainers", GitInfo, reducer_1.reducer);
