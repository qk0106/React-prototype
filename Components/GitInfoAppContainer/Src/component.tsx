import { wrapWithStyle } from "ReactStyleWrapper";
import { wrapWithInstance } from "ReactInstanceWrapper";

import * as React from "react";
import { reducer } from "./reducer";
const style = require("./style.less");

import { GitInfoContainer } from "GitInfoContainer";

const component = props => (
    <div>
        <div styleName="git-size">
            <GitInfoContainer {...props} />
        </div>
        <br />
    </div>
);

export const GitInfoAppContainer = wrapWithInstance(this, reducer)(wrapWithStyle(style)(component));
