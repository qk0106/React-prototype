"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var style = require("./style.less");
var React = require("react");
var CSSModules = require("react-css-modules");
var semantic_ui_react_1 = require("semantic-ui-react");
var _Todo = function (_a) {
    var onClick = _a.onClick, completed = _a.completed, text = _a.text;
    return (React.createElement(semantic_ui_react_1.List.Item, { onClick: onClick, style: {
            textDecoration: completed ? "line-through" : "none"
        } },
        React.createElement(semantic_ui_react_1.List.Icon, { name: "folder" }),
        text));
};
exports.Todo = CSSModules(_Todo, style); // modulise style with component
