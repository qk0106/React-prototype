import { wrapWithStyle } from "ReactStyleWrapper";

import * as React from "react";
const style = require("./style.less");

const component = ({ clickCount, onClick }) => (
    <div>
        <p>Click Count: {clickCount}</p>
        <button onClick={onClick}> Add Count </button>
    </div>
);

export const TopPresenter = wrapWithStyle(style)(component);
