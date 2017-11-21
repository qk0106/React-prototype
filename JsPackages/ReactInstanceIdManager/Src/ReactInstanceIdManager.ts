import { generateId } from "IdGenerator";

let instanceIdRegistry = [];

export const generateInstanceId = (instanceIdPrefix, componentName) =>
    instanceIdPrefix + "_" + componentName + "_" + generateId();

export const extractPrefixFromInstanceId = instanceId => {
    if (instanceId === undefined) return undefined;
    const reg = /(\w+)\_\w+\_\w+$/;
    return instanceId.match(reg)[1];
};

export const extractComponentNameFromInstanceId = instanceId => {
    if (instanceId === undefined) return undefined;
    const reg = /\_(\w+)\_\w+$/;
    return instanceId.match(reg)[1];
};

export const registerInstanceId = instanceId => {
    instanceIdRegistry.push(instanceId);
};

export const unregisterInstanceId = instanceId => {
    let array = instanceIdRegistry;
    let index = array.indexOf(instanceId);
    if (index > -1) {
        array.splice(index, 1);
    }
};

export const collectInstanceIds = () => instanceIdRegistry;
