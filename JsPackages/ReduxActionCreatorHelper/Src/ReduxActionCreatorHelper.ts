import { generateId } from "IdGenerator";

enum ActionMode {
    InstanceOnly = 0,
    BroadCast = 1
}

export const generateInstanceActionCreator = actionType => (instanceId, targetMode?) => (
    actionParamsObj?
) => ({
    type: actionType,
    instanceId: instanceId,
    targetMode: targetMode ? targetMode : ActionMode.InstanceOnly,
    requestId: generateId(),
    ...actionParamsObj
});
