import * as React from "react";
import { wrapWithInstance } from "ReactInstanceWrapper";

const style = require("./style.less");
import { wrapWithStyle } from "ReactStyleWrapper";

import { reducer } from "./reducer";
import { GitInfoContainer } from "GitInfoContainer";

const component = props => (
    <div>
        <div styleName="git-size">
            <GitInfoContainer {...props} />
        </div>
        <br />
    </div>
);

export const GitInfoAppContainer = wrapWithInstance("GitInfo", reducer)(
    wrapWithStyle(style)(component)
);
