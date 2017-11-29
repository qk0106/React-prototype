import { getUpdatedTargetState } from "ReduxStateHelper";
import { collectSharedResources } from "ReduxSharedResourceManager";

export const SHARED_RESOURCE_KEY = "SharedResource";

export const getUpdatedSharedResourceState = (state, action) => {
    const sharedResourcReducer = collectSharedResources();
    return getUpdatedTargetState(state, action, SHARED_RESOURCE_KEY, sharedResourcReducer);
};
