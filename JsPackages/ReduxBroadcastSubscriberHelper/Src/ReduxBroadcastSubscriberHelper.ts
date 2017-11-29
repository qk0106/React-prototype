import { collectBroadcastSubscribers } from "ReduxBroadcastSubscriberManager";

export const isBroadcastSubscriber = componentName => {
    const broadcastSubscriberRegistry = collectBroadcastSubscribers();
    if (broadcastSubscriberRegistry[componentName])
        return broadcastSubscriberRegistry[componentName].subscribe;
    else return false;
};
