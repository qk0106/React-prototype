import { wrapWithStyle } from "ReactStyleWrapper";
import { wrapWithInstance } from "ReactInstanceWrapper";

import * as React from "react";
import { reducer } from "./reducer";
const style = require("./style.less");

import { CountryDropDownContainer } from "CountryDropDownContainer";

const component = props => (
    <div>
        <div styleName="country-drop">
            <p>Country DropDown Component</p>
            <CountryDropDownContainer {...props} />
        </div>
        <br />
    </div>
);

export const CountryDropDownAppContainer = wrapWithInstance(this, reducer)(
    wrapWithStyle(style)(component)
);
