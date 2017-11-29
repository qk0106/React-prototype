let broadcastSubscriberRegistry = {};

export const registerBroadcastSubscriber = componentName => {
    if (broadcastSubscriberRegistry[componentName] === undefined)
        broadcastSubscriberRegistry[componentName] = { subscribe: true, counter: 1 };
    else broadcastSubscriberRegistry[componentName].counter++;
};

export const unregisterBroadcastSubscriber = componentName => {
    broadcastSubscriberRegistry[componentName].counter--;
    if (broadcastSubscriberRegistry[componentName].counter < 1)
        broadcastSubscriberRegistry[componentName] = undefined;
};

export const collectBroadcastSubscribers = () => broadcastSubscriberRegistry;
