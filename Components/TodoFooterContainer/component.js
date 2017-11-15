"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TodoFilterLink_1 = require("TodoFilterLink");
var React = require("react");
exports.TodoFooter = function (_a) {
    var instanceProps = _a.instanceProps;
    return (React.createElement("p", null,
        "Show:",
        " ",
        React.createElement(TodoFilterLink_1.TodoFilterLink, { instanceProps: instanceProps, filter: "SHOW_ALL" }, "All"),
        ", ",
        React.createElement(TodoFilterLink_1.TodoFilterLink, { instanceProps: instanceProps, filter: "SHOW_ACTIVE" }, "Active"),
        ", ",
        React.createElement(TodoFilterLink_1.TodoFilterLink, { instanceProps: instanceProps, filter: "SHOW_COMPLETED" }, "Completed")));
};
