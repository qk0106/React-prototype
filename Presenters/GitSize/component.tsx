import * as React from "react";
import * as CSSModules from "react-css-modules";
const style = require("./style.less");

const _GitSize = ({ gitSize, refreshCount, onClick }) => (
    <div>
        <p styleName="size-bg">Size: {gitSize}</p>
        <p>Refresh Count: {refreshCount.count}</p>
        <button onClick={onClick}> Refresh </button>
    </div>
);

export const GitSize = CSSModules(_GitSize, style); // modulise style with component
