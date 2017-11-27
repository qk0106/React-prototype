import { wrapWithInit } from "ReactInitComponentWrapper";
import { wrapWithConnect } from "ReduxConnectComponentWrapper";

import { CountryDropDownPresenter } from "CountryDropDownPresenter";
import { onSelect, initCountryOptions } from "CountryDropDownSubContainer";

const stateProps = (ownState, ownProps, sharedState) => ({
    selectedCountry: ownState.selectedCountry !== undefined ? ownState.selectedCountry : "",
    countryOptions: sharedState.countryOptions !== undefined ? sharedState.countryOptions : []
});

const dispatchProps = (dispatch, instanceId, ownProps, stateProps) => ({
    init: () => {
        if (stateProps.countryOptions.length === 0) dispatch(initCountryOptions(instanceId)());
    },
    selectHandler: (event, data) => {
        dispatch(onSelect(instanceId)({ select: data.value }));
    }
});

export const CountryDropDownSubContainer = wrapWithConnect(
    stateProps,
    dispatchProps,
    wrapWithInit(CountryDropDownPresenter)
);
