import { wrapWithStyle } from "ReactStyleWrapper";
import { wrapWithInstance } from "ReactInstanceWrapper";

import * as React from "react";
import { reducer } from "./reducer";
const style = require("./style.less");

import { FitnessScoreContainer } from "FitnessScoreContainer";

const broadcastConfig = {
    subscribe: true
};
const component = props => (
    <div>
        <div styleName="fitness-score">
            <p>Fitness Score Component</p>
            <FitnessScoreContainer {...props} />
        </div>
        <br />
    </div>
);

export const FitnessScoreAppContainer = wrapWithInstance(this, reducer, broadcastConfig)(
    wrapWithStyle(style)(component)
);
