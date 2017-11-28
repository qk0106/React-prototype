import * as React from "react";
import { createInstance, removeInstance } from "ReduxInstanceHelper";
import {
    registerBroadcastSubscriber,
    unregisterBroadcastSubscriber
} from "ReduxBroadcastSubscriberManager";

export const wrapWithInstance = (componentName, reducer, broadcastConfig?) => WrappedComponent => {
    class InstanceWrapper extends React.PureComponent<any> {
        private _instanceId;
        constructor(props) {
            super(props);
        }
        componentWillMount() {
            const { instanceIdPrefix } = this.props;
            this._instanceId = createInstance(instanceIdPrefix, componentName, reducer);
            registerBroadcastSubscriber(broadcastConfig, componentName);
        }
        componentWillUnmount() {
            removeInstance(this._instanceId, componentName);
            unregisterBroadcastSubscriber(broadcastConfig, componentName);
        }
        render() {
            return <WrappedComponent instanceId={this._instanceId} {...this.props} />;
        }
    }
    return InstanceWrapper;
};
