import * as React from "react";
import { generateInstanceId } from "ReactInstanceIdManager";
import { registerInstance, unregisterInstance } from "ReactInstanceManager";

export const wrapWithInstance = (WrappedComponent, reducer, componentName) => {
    class InstanceWrapper extends React.PureComponent<any> {
        private _reducer = reducer;
        private _instanceId = generateInstanceId(this.props.instanceIdPrefix, componentName);
        constructor(props) {
            super(props);
        }
        componentWillMount() {
            registerInstance(this._instanceId, this._reducer, componentName);
        }
        componentWillUnmount() {
            unregisterInstance(this._instanceId, this._reducer, componentName);
        }
        render() {
            return <WrappedComponent instanceId={this._instanceId} {...this.props} />;
        }
    }
    return InstanceWrapper;
};
