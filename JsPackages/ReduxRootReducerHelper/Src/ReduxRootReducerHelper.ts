import { getCompleteState } from "ReduxStateHelper";
import { getUpdatedParentTreeState } from "ReduxInstanceHelper";
import { getUpdatedSharedResourceState } from "ReduxSharedResourceHelper";

export const getRootReducer = () => {
    return (existingState = {}, action) => {
        let state = getCompleteState(existingState);
        state = getUpdatedParentTreeState(state, action);
        state = getUpdatedSharedResourceState(state, action);
        return state;
    };
};
