import { wrapWithInstance } from "ReactInstanceComponentWrapper";

const style = require("./style.less");
import * as CSSModules from "react-css-modules";
import * as React from "react";
import {} from "semantic-ui-react";

import { reducer } from "./reducer";
import { GitInfoSubContainer } from "GitInfoSubContainer";

const component = props => (
    <div>
        <div styleName="git-size">
            <GitInfoSubContainer {...props} />
        </div>
        <br />
    </div>
);

export const GitInfoContainer = wrapWithInstance(
    CSSModules(component, style),
    reducer,
    "GitInfoContainer"
);
