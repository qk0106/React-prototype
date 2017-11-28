import { wrapWithStyle } from "ReactStyleWrapper";

import * as React from "react";
const style = require("./style.less");

const component = ({ gitSize, refreshCount, onClick }) => (
    <div>
        <p>Git Info Component</p>
        <p styleName="size-bg">Size: {gitSize}</p>
        <p>Refresh Count: {refreshCount.count}</p>
        <button onClick={onClick}> Refresh </button>
    </div>
);

export const GitInfoPresenter = wrapWithStyle(style)(component);
