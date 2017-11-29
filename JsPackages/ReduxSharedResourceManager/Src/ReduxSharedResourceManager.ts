let sharedResourceRegistry = {};

export const registerSharedResource = newSharedResource => {
    sharedResourceRegistry = {
        ...sharedResourceRegistry,
        ...newSharedResource
    };
};

export const collectSharedResources = () => sharedResourceRegistry;
