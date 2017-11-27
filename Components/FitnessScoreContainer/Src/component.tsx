import { wrapWithInstance } from "ReactInstanceComponentWrapper";

const style = require("./style.less");
import * as CSSModules from "react-css-modules";
import * as React from "react";
import {} from "semantic-ui-react";

import { reducer } from "./reducer";
import { FitnessScoreSubContainer } from "FitnessScoreSubContainer";

export const component = props => (
    <div>
        <div styleName="fitness-score">
            <p>Fitness Score Component</p>
            <FitnessScoreSubContainer {...props} />
        </div>
        <br />
    </div>
);

export const FitnessScoreContainer = wrapWithInstance(
    CSSModules(component, style),
    reducer,
    "FitnessScoreContainer",
    true
);
