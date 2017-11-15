"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TodoFilterLinkContainer_1 = require("TodoFilterLinkContainer");
var React = require("react");
exports.TodoFooterContainer = function (_a) {
    var instanceProps = _a.instanceProps;
    return (React.createElement("p", null,
        "Show:",
        " ",
        React.createElement(TodoFilterLinkContainer_1.TodoFilterLinkContainer, { instanceProps: instanceProps, filter: "SHOW_ALL" }, "All"),
        ", ",
        React.createElement(TodoFilterLinkContainer_1.TodoFilterLinkContainer, { instanceProps: instanceProps, filter: "SHOW_ACTIVE" }, "Active"),
        ", ",
        React.createElement(TodoFilterLinkContainer_1.TodoFilterLinkContainer, { instanceProps: instanceProps, filter: "SHOW_COMPLETED" }, "Completed")));
};
