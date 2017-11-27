import { wrapWithInstance } from "ReactInstanceWrapper";

const style = require("./style.less");
import * as CSSModules from "react-css-modules";
import * as React from "react";
import {} from "semantic-ui-react";

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
    CSSModules(component, style)
);
