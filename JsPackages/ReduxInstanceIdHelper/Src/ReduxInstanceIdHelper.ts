import { generateId } from "IdGenerator";
import { collectInstanceIds } from "ReduxInstanceIdManager";
import { isBroadcastSubscriber } from "ReduxBroadcastSubscriberHelper";

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

export const findTargetInstanceIds = instanceId => {
    let targetInstanceIds = [];
    const senderInstanceId = instanceId;
    const senderParentInstanceId = extractPrefixFromInstanceId(senderInstanceId);
    collectInstanceIds().forEach(receiverInstanceId => {
        const receiverComponentName = extractComponentNameFromInstanceId(receiverInstanceId);
        const receiverParentInstanceId = extractPrefixFromInstanceId(receiverInstanceId);
        if (
            isBroadcastSubscriber(receiverComponentName) || // match broadcast listener
            receiverInstanceId === senderParentInstanceId || // match parent instance
            receiverParentInstanceId === senderParentInstanceId || // match sibling instances, including itself
            receiverParentInstanceId.includes(senderParentInstanceId) // match descendant instances
        )
            targetInstanceIds.push(receiverInstanceId);
    });
    return targetInstanceIds;
};
