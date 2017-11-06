import { generateId } from "IdGenerator";

let rootInstanceIds = {};

export const generateInstanceId = iPrefix => iPrefix + "_" + generateId(); // iPrefix is short for instanceIdPrefix

export const registerInstanceId = (instancesProp, instanceId) => {
    if (rootInstanceIds[instancesProp] === undefined) {
        rootInstanceIds[instancesProp] = [];
    }
    rootInstanceIds[instancesProp].push(instanceId);
};

export const collectInstanceIds = instancesProp => rootInstanceIds[instancesProp];
