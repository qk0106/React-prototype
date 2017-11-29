import { updateTargetState } from "ReduxStateHelper";
import { collectReducers } from "ReduxReducerManager";
import {
    extractComponentNameFromInstanceId,
    getParentTreeInstanceIds
} from "ReduxInstanceIdHelper";

const updateInstanceState = (instanceId, state, action) => {
    const componentName = extractComponentNameFromInstanceId(instanceId);
    const instanceReducer = collectReducers()[componentName].reducer;
    if (!(instanceId in state)) return state;
    return updateTargetState(state, action, instanceId, instanceReducer);
};

export const updateParentTreeState = (state, action) => {
    getParentTreeInstanceIds(action.instanceId).forEach(instanceId => {
        state = updateInstanceState(instanceId, state, action);
    });
    return state;
};
