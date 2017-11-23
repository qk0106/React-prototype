const style = require("./style.less");
import * as CSSModules from "react-css-modules";
import * as React from "react";
import { reducer } from "./reducer";
import { CountryDropDownSubContainer } from "CountryDropDownSubContainer";
import { wrapWithInstance } from "ReactInstanceComponentWrapper";
import {} from "semantic-ui-react";

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
