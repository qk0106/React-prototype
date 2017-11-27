import { wrapWithConnect } from "ReduxConnectComponentWrapper";

import { FitnessScorePresenter } from "FitnessScorePresenter";

const stateProps = (ownState, ownProps) => ({
    fitnessScore: ownState.fitnessScoreCounter !== undefined ? ownState.fitnessScoreCounter : 0
});

const dispatchProps = (dispatch, instanceId, ownProps, stateProps) => ({});

export const FitnessScoreContainer = wrapWithConnect(
    stateProps,
    dispatchProps,
    FitnessScorePresenter
);
