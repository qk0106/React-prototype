import { updateSharedResourceState } from "ReduxSharedResourceHelper";
import { getRegisteredInstancesState, updateParentTreeState } from "ReduxInstanceHelper";
import { mergeState } from "ReduxStateHelper";

export const getRootReducer = () => {
    const registeredInstancesState = getRegisteredInstancesState();
    return (existingState = registeredInstancesState, action) => {
        let state = mergeState(existingState, registeredInstancesState);
        state = updateParentTreeState(state, action);
        state = updateSharedResourceState(state, action);
        return state;
    };
};
