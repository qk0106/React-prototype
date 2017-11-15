"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var style = require("./style.less");
var React = require("react");
var CSSModules = require("react-css-modules");
var _Link = function (_a) {
    var active = _a.active, children = _a.children, onClick = _a.onClick;
    if (active) {
        return React.createElement("span", null, children);
    }
    return (React.createElement("a", { href: "#", onClick: function (e) {
            e.preventDefault();
            onClick();
        } }, children));
};
exports.Link = CSSModules(_Link, style); // modulise style with component
