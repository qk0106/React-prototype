import * as React from "react";

const style = require("./style.less");
import { wrapWithStyle } from "ReactStyleWrapper";

import {} from "semantic-ui-react";

const component = ({ fitnessScore }) => (
    <div>
        <p>Fitness Score: {fitnessScore}</p>
    </div>
);

export const FitnessScorePresenter = wrapWithStyle(style)(component);
