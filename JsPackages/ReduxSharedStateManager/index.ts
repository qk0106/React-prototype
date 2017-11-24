let sharedStateRegistry = {};

export const registerSharedState = sharedState => {
    sharedStateRegistry = {
        ...sharedStateRegistry,
        ...sharedState
    };
};

export const collectSharedState = () => sharedStateRegistry;
