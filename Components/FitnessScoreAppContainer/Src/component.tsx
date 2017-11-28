import * as React from "react";
import { wrapWithInstance } from "ReactInstanceWrapper";

const style = require("./style.less");
import { wrapWithStyle } from "ReactStyleWrapper";

import { reducer } from "./reducer";
import { FitnessScoreContainer } from "FitnessScoreContainer";

const broadcastConfig = {
    subscribe: true
};
export const component = props => (
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
