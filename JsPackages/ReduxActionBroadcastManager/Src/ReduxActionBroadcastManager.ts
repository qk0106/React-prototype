let broadcastListenerRegistry = {};

export const registerBroadcastListener = componentName => {
    if (broadcastListenerRegistry[componentName] === undefined)
        broadcastListenerRegistry[componentName] = { listen: true, counter: 1 };
    else broadcastListenerRegistry[componentName].counter++;
};

export const unregisterBroadcastListener = componentName => {
    broadcastListenerRegistry[componentName].counter--;
    if (broadcastListenerRegistry[componentName].counter < 1)
        broadcastListenerRegistry[componentName] = undefined;
};

export const collectBroadcastListeners = () => broadcastListenerRegistry;
