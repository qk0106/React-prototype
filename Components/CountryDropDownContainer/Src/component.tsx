import { wrapWithInstance } from "ReactInstanceComponentWrapper";

const style = require("./style.less");
import * as React from "react";
import * as CSSModules from "react-css-modules";
import {} from "semantic-ui-react";

import { reducer } from "./reducer";
import { CountryDropDownSubContainer } from "CountryDropDownSubContainer";

export const component = props => (
    <div>
        <div styleName="country-drop">
            <p>Country DropDown Component</p>
            <CountryDropDownSubContainer {...props} />
        </div>
        <br />
    </div>
);

export const CountryDropDownContainer = wrapWithInstance(
    CSSModules(component, style),
    reducer,
    "CountryDropDownContainer"
);
