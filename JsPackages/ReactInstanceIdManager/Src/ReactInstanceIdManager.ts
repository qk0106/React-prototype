import { generateId } from "IdGenerator";

let rootInstanceIds = {};

export const generateInstanceId = instanceIdPrefix => instanceIdPrefix + "_" + generateId(); // instanceIdPrefix is short for instanceIdPrefix

export const registerInstanceId = (instancesProp, instanceId) => {
    if (rootInstanceIds[instancesProp] === undefined) {
        rootInstanceIds[instancesProp] = [];
    }
    rootInstanceIds[instancesProp].push(instanceId);
};

export const collectInstanceIds = instancesProp => rootInstanceIds[instancesProp];
