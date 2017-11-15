"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var style = require("./style.less");
var React = require("react");
var CSSModules = require("react-css-modules");
var _GitSize = function (_a) {
    var gitSize = _a.gitSize, refreshCount = _a.refreshCount, onClick = _a.onClick;
    return (React.createElement("div", null,
        React.createElement("p", { styleName: "size-bg" },
            "Size: ",
            gitSize),
        React.createElement("p", null,
            "Refresh Count: ",
            refreshCount.count),
        React.createElement("button", { onClick: onClick }, " Refresh ")));
};
exports.GitSize = CSSModules(_GitSize, style); // modulise style with component
