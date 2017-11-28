let broadcastListenerRegistry = {};

export const registerBroadcastListener = (listenToBroadcast, componentName) => {
    if (listenToBroadcast && listenToBroadcast.broadcast) {
        if (broadcastListenerRegistry[componentName] === undefined)
            broadcastListenerRegistry[componentName] = { listen: true, counter: 1 };
        else broadcastListenerRegistry[componentName].counter++;
    }
};

export const unregisterBroadcastListener = (listenToBroadcast, componentName) => {
    if (listenToBroadcast && listenToBroadcast.broadcast) {
        broadcastListenerRegistry[componentName].counter--;
        if (broadcastListenerRegistry[componentName].counter < 1)
            broadcastListenerRegistry[componentName] = undefined;
    }
};

export const collectBroadcastListeners = () => broadcastListenerRegistry;
