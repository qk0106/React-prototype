import { generateId } from "IdGenerator";
import { ActionMode } from "ReduxActionModeHelper";

export const generateInstanceActionCreator = actionType => (instanceId, targetMode?) => (
    actionParamsObj?
) => ({
    type: actionType,
    instanceId: instanceId,
    targetMode: targetMode ? targetMode : ActionMode.InstanceOnly,
    requestId: generateId(),
    ...actionParamsObj
});
