let instanceIdArrays = {};

export const registerInstanceIds = (instancesProp, instanceIdArray) => {
    if (instanceIdArrays[instancesProp] === undefined) {
        instanceIdArrays[instancesProp] = [];
    }
    instanceIdArrays[instancesProp] = instanceIdArrays[instancesProp].concat(instanceIdArray);
};

export const fetchInstanceIdArray = instancesProp => instanceIdArrays[instancesProp];
