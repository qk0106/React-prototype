"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var style = require("./style.less");
var React = require("react");
var CSSModules = require("react-css-modules");
var _AddTodoView = function (_a) {
    var onSubmit = _a.onSubmit, onChange = _a.onChange, inputText = _a.inputText;
    return (React.createElement("div", null,
        React.createElement("form", { onSubmit: onSubmit },
            React.createElement("input", { value: inputText, onChange: onChange }),
            React.createElement("button", { type: "submit" }, "Add Todo"))));
};
exports.AddTodoView = CSSModules(_AddTodoView, style); // modulise style with component
