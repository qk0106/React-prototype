import { ON_SELECT } from "CountryDropDownSubContainer"; // To get Action Types

const selectedCountry = (selectedCountry = "", action) => {
    switch (action.type) {
        case ON_SELECT:
            return action.select;
        default:
            return selectedCountry;
    }
};

export const reducer = {
    selectedCountry
};
