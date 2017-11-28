import * as React from "react";
import { wrapWithInstance } from "ReactInstanceWrapper";

const style = require("./style.less");
import { wrapWithStyle } from "ReactStyleWrapper";

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

export const CountryDropDownAppContainer = wrapWithInstance(this, reducer)(
    wrapWithStyle(style)(component)
);
