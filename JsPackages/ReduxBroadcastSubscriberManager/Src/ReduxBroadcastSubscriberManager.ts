let broadcastSubscriberRegistry = {};

export const registerbroadcastSubscriber = (broadcastConfig, componentName) => {
    if (broadcastConfig && broadcastConfig.subscribe) {
        if (broadcastSubscriberRegistry[componentName] === undefined)
            broadcastSubscriberRegistry[componentName] = { subscribe: true, counter: 1 };
        else broadcastSubscriberRegistry[componentName].counter++;
    }
};

export const unregisterbroadcastSubscriber = (broadcastConfig, componentName) => {
    if (broadcastConfig && broadcastConfig.subscribe) {
        broadcastSubscriberRegistry[componentName].counter--;
        if (broadcastSubscriberRegistry[componentName].counter < 1)
            broadcastSubscriberRegistry[componentName] = undefined;
    }
};

export const collectbroadcastSubscribers = () => broadcastSubscriberRegistry;
