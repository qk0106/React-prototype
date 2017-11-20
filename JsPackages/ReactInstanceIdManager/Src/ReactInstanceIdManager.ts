import { generateId } from "IdGenerator";

let rootInstanceIds = [];

export const generateInstanceId = (instanceIdPrefix, componentName) =>
    instanceIdPrefix + "_" + componentName + "_" + generateId();

export const extractComponentNameFromInstanceId = instanceId => {
    if (instanceId === undefined) return undefined;
    const reg = /\_(\w+)\_\d+$/;
    return instanceId.match(reg)[1];
};

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
