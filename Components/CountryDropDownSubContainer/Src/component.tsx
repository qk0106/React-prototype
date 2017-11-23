import { wrapWithConnect } from "ReduxConnectComponentWrapper";
import { CountryDropDownPresenter } from "CountryDropDownPresenter";

const stateProps = (ownState, ownProps, sharedState) => ({
    selectedCountry:
        ownState.selectedCountry !== undefined ? ownState.selectedCountry : "Unselected",
    countryOptions: sharedState.countryOptions
});

const dispatchProps = (dispatch, instanceId, ownProps, stateProps) => ({
    selectHandler: e => {
        console.log(e);
    }
});

export const CountryDropDownSubContainer = wrapWithConnect(
    stateProps,
    dispatchProps,
    CountryDropDownPresenter
);
