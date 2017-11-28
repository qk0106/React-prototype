import * as React from "react";
import { createInstance, removeInstance } from "ReduxInstanceHelper";
import {
    registerbroadcastSubscriber,
    unregisterbroadcastSubscriber
} from "ReduxbroadcastSubscriberManager";

export const wrapWithInstance = (componentName, reducer, broadcastConfig?) => WrappedComponent => {
    class InstanceWrapper extends React.PureComponent<any> {
        private _instanceId;
        constructor(props) {
            super(props);
        }
        componentWillMount() {
            const { instanceIdPrefix } = this.props;
            this._instanceId = createInstance(instanceIdPrefix, componentName, reducer);
            registerbroadcastSubscriber(broadcastConfig, componentName);
        }
        componentWillUnmount() {
            removeInstance(this._instanceId, componentName);
            unregisterbroadcastSubscriber(broadcastConfig, componentName);
        }
        render() {
            return <WrappedComponent instanceId={this._instanceId} {...this.props} />;
        }
    }
    return InstanceWrapper;
};
