import * as React from "react";
import { createInstance, removeInstance } from "ReduxInstanceManager";
import {
    registerBroadcastSubscriber,
    unregisterBroadcastSubscriber
} from "ReduxBroadcastSubscriberManager";

const findComponentName = appContainer => {
    for (let key in appContainer) {
        if (appContainer[key].name && appContainer[key].name === "InstanceWrapper") {
            return key;
        }
    }
};

export const wrapWithInstance = (appContainer, reducer, broadcastConfig?) => WrappedComponent => {
    class InstanceWrapper extends React.PureComponent<any> {
        private _instanceId;
        constructor(props) {
            super(props);
        }
        componentWillMount() {
            const { instanceIdPrefix } = this.props;
            const componentName = findComponentName(appContainer);
            this._instanceId = createInstance(instanceIdPrefix, componentName, reducer);
            if (broadcastConfig && broadcastConfig.subscribe)
                registerBroadcastSubscriber(componentName);
        }
        componentWillUnmount() {
            const componentName = findComponentName(appContainer);
            removeInstance(this._instanceId);
            if (broadcastConfig && broadcastConfig.subscribe)
                unregisterBroadcastSubscriber(componentName);
        }
        render() {
            return <WrappedComponent instanceId={this._instanceId} {...this.props} />;
        }
    }
    return InstanceWrapper;
};
