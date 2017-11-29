import { collectSharedResources } from "ReduxSharedResourceManager";
import { updateTargetState } from "ReduxStateHelper";

export const SHARED_RESOURCE_KEY = "SharedResource";

export const updateSharedResourceState = (state, action) => {
    const sharedResourcReducer = collectSharedResources();
    return updateTargetState(state, action, SHARED_RESOURCE_KEY, sharedResourcReducer);
};
