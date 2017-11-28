import { generateId } from "IdGenerator";

export const generateInstanceId = (instanceIdPrefix, componentName) =>
    instanceIdPrefix + "_" + componentName + "_" + generateId();

export const extractPrefixFromInstanceId = instanceId => {
    if (instanceId === undefined) return undefined;
    const reg = /(\w+)\_[A-Za-z]+\_[0-9]+$/;
    return instanceId.match(reg)[1];
};

export const extractComponentNameFromInstanceId = instanceId => {
    if (instanceId === undefined) return undefined;
    const reg = /\_([A-Za-z]+)\_[0-9]+$/;
    return instanceId.match(reg)[1];
};
