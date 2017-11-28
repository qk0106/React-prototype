import { wrapWithStyle } from "ReactStyleWrapper";

import * as React from "react";
const style = require("./style.less");

const component = ({ fitnessScore }) => (
    <div>
        <p>Fitness Score: {fitnessScore}</p>
    </div>
);

export const FitnessScorePresenter = wrapWithStyle(style)(component);
