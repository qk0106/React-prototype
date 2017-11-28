import * as React from "react";
import { generateInstanceId } from "ReduxInstanceIdHelper";
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
        private _instanceId = generateInstanceId(this.props.instanceIdPrefix, componentName);
        constructor(props) {
            super(props);
        }
        componentWillMount() {
            registerInstance(this._instanceId, this._reducer);
            if (listenToBroadcast && listenToBroadcast.broadcast)
                registerBroadcastListener(componentName);
        }
        componentWillUnmount() {
            unregisterInstance(this._instanceId, this._reducer);
            if (listenToBroadcast && listenToBroadcast.broadcast)
                unregisterBroadcastListener(componentName);
        }
        render() {
            return <WrappedComponent instanceId={this._instanceId} {...this.props} />;
        }
    }
    return InstanceWrapper;
};
