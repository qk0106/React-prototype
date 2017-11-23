import { wrapWithConnect } from "ReduxConnectComponentWrapper";
import { CountryDropDownPresenter } from "CountryDropDownPresenter";
import { onSelect } from "CountryDropDownSubContainer";

const stateProps = (ownState, ownProps, sharedState) => ({
    selectedCountry:
        ownState.selectedCountry !== undefined ? ownState.selectedCountry : "Unselected",
    countryOptions: sharedState.countryOptions
});

const dispatchProps = (dispatch, instanceId, ownProps, stateProps) => ({
    selectHandler: (event, data) => {
        dispatch(onSelect(instanceId)({ select: data.value }));
    }
});

export const CountryDropDownSubContainer = wrapWithConnect(
    stateProps,
    dispatchProps,
    CountryDropDownPresenter
);
