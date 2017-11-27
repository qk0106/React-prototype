import { ON_SELECT } from "CountryDropDownContainer";

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
