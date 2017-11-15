"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var reducer_1 = require("./reducer");
var ReactInstanceComponentWrapper_1 = require("ReactInstanceComponentWrapper");
var GitInfo_1 = require("GitInfo");
var _GitInfor = function (_a) {
    var instanceProps = _a.instanceProps, gitUrl = _a.gitUrl;
    return (React.createElement("div", null,
        React.createElement(GitInfo_1.GitInfo, { instanceProps: instanceProps, gitUrl: gitUrl })));
};
exports.GitInfor = ReactInstanceComponentWrapper_1.wrapWithInstance("GitInfors", _GitInfor, reducer_1.reducer);
