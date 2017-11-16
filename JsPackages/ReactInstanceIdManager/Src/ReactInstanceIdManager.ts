import { generateId } from "IdGenerator";

let rootInstanceIds = {};

export const generateInstanceId = instanceIdPrefix => instanceIdPrefix + "_" + generateId(); // instanceIdPrefix is short for instanceIdPrefix

export const registerInstanceId = (instanceSet, instanceId) => {
    if (rootInstanceIds[instanceSet] === undefined) {
        rootInstanceIds[instanceSet] = [];
    }
    rootInstanceIds[instanceSet].push(instanceId);
};

export const unregisterInstanceId = (instanceSet, instanceId) => {
    let array = rootInstanceIds[instanceSet];
    let index = array.indexOf(instanceId);
    if (index > -1) {
        array.splice(index, 1);
    }
};

export const collectInstanceIds = instanceSet => rootInstanceIds[instanceSet];
