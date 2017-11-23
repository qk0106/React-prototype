const style = require("./style.less");
import * as React from "react";
import * as CSSModules from "react-css-modules";
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

export const CountryDropDownPresenter = CSSModules(component, style); // modulise style with component
