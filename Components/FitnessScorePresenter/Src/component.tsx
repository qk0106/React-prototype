const style = require("./style.less");
import * as React from "react";
import * as CSSModules from "react-css-modules";
import {} from "semantic-ui-react";

const component = ({ fitnessScore }) => (
    <div>
        <p>Fitness Score: {fitnessScore}</p>
    </div>
);

export const FitnessScorePresenter = CSSModules(component, style); // modulise style with component
