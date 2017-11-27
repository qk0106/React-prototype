import { wrapWithInstance } from "ReactInstanceWrapper";

const style = require("./style.less");
import * as CSSModules from "react-css-modules";
import * as React from "react";
import {} from "semantic-ui-react";

import { reducer } from "./reducer";
import { FitnessScoreContainer } from "FitnessScoreContainer";

export const component = props => (
    <div>
        <div styleName="fitness-score">
            <p>Fitness Score Component</p>
            <FitnessScoreContainer {...props} />
        </div>
        <br />
    </div>
);

export const FitnessScore = wrapWithInstance(
    CSSModules(component, style),
    reducer,
    "FitnessScore",
    true
);
