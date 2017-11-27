import * as React from "react";

const style = require("./style.less");
import { wrapWithStyle } from "ReactStyleWrapper";
import { Dropdown } from "semantic-ui-react";

const component = ({ selectedCountry, countryOptions, selectHandler }) => (
    <div>
        <p>Selected Country: {selectedCountry}</p>
        <Dropdown
            placeholder="Select Country"
            fluid
            search
            selection
            options={countryOptions}
            onChange={selectHandler}
        />
    </div>
);

export const CountryDropDownPresenter = wrapWithStyle(style)(component);
