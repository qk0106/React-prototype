import * as React from "react";
import { createInstance, removeInstance } from "ReduxInstanceHelper";
import {
    registerBroadcastSubscriber,
    unregisterBroadcastSubscriber
} from "ReduxBroadcastSubscriberManager";

const findComponentName = appContainer => {
    for (let prop in appContainer) {
        if (appContainer[prop].name && appContainer[prop].name === "InstanceWrapper") {
            return prop;
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
            registerBroadcastSubscriber(broadcastConfig, componentName);
        }
        componentWillUnmount() {
            const componentName = findComponentName(appContainer);
            removeInstance(this._instanceId, componentName);
            unregisterBroadcastSubscriber(broadcastConfig, componentName);
        }
        render() {
            return <WrappedComponent instanceId={this._instanceId} {...this.props} />;
        }
    }
    return InstanceWrapper;
};
