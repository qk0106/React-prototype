import { wrapWithInit } from "ReactInitWrapper";
import { wrapWithConnect } from "ReactConnectWrapper";

import { CountryDropDownPresenter } from "CountryDropDownPresenter";
import { onSelect, initCountryOptions } from "CountryDropDownContainer";

const stateProps = (ownState, ownProps, sharedResource) => ({
    selectedCountry: ownState.selectedCountry !== undefined ? ownState.selectedCountry : "",
    countryOptions: sharedResource.countryOptions !== undefined ? sharedResource.countryOptions : []
});

const dispatchProps = (dispatch, instanceId, ownProps, stateProps) => ({
    init: () => {
        if (stateProps.countryOptions.length === 0) dispatch(initCountryOptions(instanceId)());
    },
    selectHandler: (event, data) => {
        dispatch(onSelect(instanceId)({ select: data.value }));
    }
});

export const CountryDropDownContainer = wrapWithConnect(stateProps, dispatchProps)(
    wrapWithInit(CountryDropDownPresenter)
);
