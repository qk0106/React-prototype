let instanceIdRegistry = [];

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
