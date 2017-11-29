import { getUpdatedTargetState } from "ReduxStateHelper";
import { collectReducers } from "ReduxReducerManager";
import {
    extractComponentNameFromInstanceId,
    getParentTreeInstanceIds
} from "ReduxInstanceIdHelper";

const getUpdatedInstanceState = (instanceId, state, action) => {
    const componentName = extractComponentNameFromInstanceId(instanceId);
    const instanceReducer = collectReducers()[componentName].reducer;
    if (!(instanceId in state)) return state;
    return getUpdatedTargetState(state, action, instanceId, instanceReducer);
};

export const getUpdatedParentTreeState = (state, action) => {
    getParentTreeInstanceIds(action.instanceId).forEach(instanceId => {
        state = getUpdatedInstanceState(instanceId, state, action);
    });
    return state;
};
