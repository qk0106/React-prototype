import { generateInstanceActionCreator } from "ReduxActionCreatorHelper";

// Action Type
export const ON_SELECT: string = "ON_SELECTED";
export const INIT_COUNTRY_OPTIONS: string = "INIT_COUNTRY_OPTIONS";
export const FETCH_COUNTRY_OPTIONS_SUCCESS: string = "FETCH_COUNTRY_OPTIONS_SUCCESS";

// Action Creator
export const onSelect = generateInstanceActionCreator(ON_SELECT);
export const initCountryOptions = generateInstanceActionCreator(INIT_COUNTRY_OPTIONS);
export const fetchCountryOptionsSuccess = generateInstanceActionCreator(
    FETCH_COUNTRY_OPTIONS_SUCCESS
);
