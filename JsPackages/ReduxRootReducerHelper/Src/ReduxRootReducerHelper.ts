import { getCompleteState } from "ReduxStateHelper";
import { updateParentTreeState } from "ReduxInstanceHelper";
import { updateSharedResourceState } from "ReduxSharedResourceHelper";

export const getRootReducer = () => {
    return (existingState = {}, action) => {
        let state = getCompleteState(existingState);
        state = updateParentTreeState(state, action);
        state = updateSharedResourceState(state, action);
        return state;
    };
};
