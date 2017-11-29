import { collectSharedResources } from "ReduxSharedResourceManager";
import { updateTargetState } from "ReduxStateHelper";

export const updateSharedResourceState = (state, action) => {
    const sharedResourcReducer = collectSharedResources();
    return updateTargetState(state, action, "SharedResource", sharedResourcReducer);
};
