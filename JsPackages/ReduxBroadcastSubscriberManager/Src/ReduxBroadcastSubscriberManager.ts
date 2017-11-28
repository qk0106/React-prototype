let broadcastSubscriberRegistry = {};

export const registerBroadcastSubscriber = (broadcastConfig, componentName) => {
    if (broadcastConfig && broadcastConfig.subscribe) {
        if (broadcastSubscriberRegistry[componentName] === undefined)
            broadcastSubscriberRegistry[componentName] = { subscribe: true, counter: 1 };
        else broadcastSubscriberRegistry[componentName].counter++;
    }
};

export const unregisterBroadcastSubscriber = (broadcastConfig, componentName) => {
    if (broadcastConfig && broadcastConfig.subscribe) {
        broadcastSubscriberRegistry[componentName].counter--;
        if (broadcastSubscriberRegistry[componentName].counter < 1)
            broadcastSubscriberRegistry[componentName] = undefined;
    }
};

export const collectBroadcastSubscribers = () => broadcastSubscriberRegistry;
