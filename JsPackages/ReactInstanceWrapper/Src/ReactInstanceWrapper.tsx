import * as React from "react";
import { registerInstance, unregisterInstance } from "ReduxInstanceManager";
import {
    registerBroadcastListener,
    unregisterBroadcastListener
} from "ReduxBroadcastListenerManager";

export const wrapWithInstance = (
    componentName,
    reducer,
    listenToBroadcast?
) => WrappedComponent => {
    class InstanceWrapper extends React.PureComponent<any> {
        private _reducer = reducer;
        private _instanceId;
        constructor(props) {
            super(props);
        }
        componentWillMount() {
            this._instanceId = registerInstance(
                this.props.instanceIdPrefix,
                componentName,
                this._reducer
            );
            registerBroadcastListener(componentName, listenToBroadcast);
        }
        componentWillUnmount() {
            unregisterInstance(this._instanceId, componentName);
            unregisterBroadcastListener(listenToBroadcast, componentName);
        }
        render() {
            return <WrappedComponent instanceId={this._instanceId} {...this.props} />;
        }
    }
    return InstanceWrapper;
};
