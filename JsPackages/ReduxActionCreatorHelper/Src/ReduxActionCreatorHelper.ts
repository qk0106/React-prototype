import { generateId } from "IdGenerator";

export const generateInstanceActionCreator = actionType => instanceId => (actionParamsObj?) => ({
    type: actionType,
    instanceId: instanceId,
    requestId: generateId(),
    ...actionParamsObj
});
