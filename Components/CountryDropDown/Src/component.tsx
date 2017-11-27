import { wrapWithInstance } from "ReactInstanceWrapper";

const style = require("./style.less");
import * as React from "react";
import * as CSSModules from "react-css-modules";
import {} from "semantic-ui-react";

import { reducer } from "./reducer";
import { CountryDropDownContainer } from "CountryDropDownContainer";

export const component = props => (
    <div>
        <div styleName="country-drop">
            <p>Country DropDown Component</p>
            <CountryDropDownContainer {...props} />
        </div>
        <br />
    </div>
);

export const CountryDropDown = wrapWithInstance(
    CSSModules(component, style),
    reducer,
    "CountryDropDown"
);
