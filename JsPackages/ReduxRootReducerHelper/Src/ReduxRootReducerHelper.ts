import { SHARED_RESOURCE_KEY, updateSharedResourceState } from "ReduxSharedResourceHelper";
import { getRegisteredInstancesState, updateParentTreeState } from "ReduxInstanceHelper";

const mergeState = (existingState, registeredInstancesState) => {
    let mergedState = {};
    for (let prop in registeredInstancesState) {
        if (registeredInstancesState.hasOwnProperty(prop)) {
            mergedState[prop] = registeredInstancesState[prop];
            if (existingState.hasOwnProperty(prop)) mergedState[prop] = existingState[prop];
        }
    }
    mergedState[SHARED_RESOURCE_KEY] = existingState[SHARED_RESOURCE_KEY];
    return mergedState;
};

export const getRootReducer = () => {
    const registeredInstancesState = getRegisteredInstancesState();
    return (existingState = registeredInstancesState, action) => {
        let state = mergeState(existingState, registeredInstancesState);
        state = updateParentTreeState(state, action);
        state = updateSharedResourceState(state, action);
        return state;
    };
};
