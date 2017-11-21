import { wrapWithConnect } from "ReduxConnectComponentWrapper";
import { addClickCount } from "./action";
import { TopPresenter } from "TopPresenter";

const stateProps = (ownState, ownProps) => ({
    clickCount: ownState.clickCounter !== undefined ? ownState.clickCounter : 0
});

const dispatchProps = (dispatch, instanceId, ownProps, stateProps) => ({
    onClick: () => {
        dispatch(addClickCount(instanceId)());
    }
});

export const TopSubContainer = wrapWithConnect(stateProps, dispatchProps, TopPresenter);
