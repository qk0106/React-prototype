import { generateId } from "IdGenerator";

let rootInstanceIds = [];

export const generateInstanceId = instanceIdPrefix => instanceIdPrefix + "_" + generateId(); // instanceIdPrefix is short for instanceIdPrefix

export const registerInstanceId = instanceId => {
    rootInstanceIds.push(instanceId);
};

export const unregisterInstanceId = instanceId => {
    let array = rootInstanceIds;
    let index = array.indexOf(instanceId);
    if (index > -1) {
        array.splice(index, 1);
    }
};

export const collectInstanceIds = () => rootInstanceIds;
