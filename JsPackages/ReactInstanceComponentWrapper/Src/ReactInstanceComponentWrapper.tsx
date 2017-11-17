import * as React from "react";
import { generateInstanceId } from "ReactInstanceIdManager";
import { registerInstance, unregisterInstance } from "ReactInstancesManager";

export const wrapWithInstance = (WrappedComponent, reducer, componentName) => {
    class InstanceWrapper extends React.PureComponent<any> {
        private _reducer = reducer;
        private _instanceProps = {
            instanceId: generateInstanceId(this.props.instanceIdPrefix, componentName)
        };
        constructor(props) {
            super(props);
        }
        componentWillMount() {
            registerInstance(this._instanceProps, this._reducer);
        }
        componentWillUnmount() {
            unregisterInstance(this._instanceProps, this._reducer);
        }
        render() {
            return <WrappedComponent instanceProps={this._instanceProps} {...this.props} />;
        }
    }
    return InstanceWrapper;
};
