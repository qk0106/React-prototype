import * as React from "react";
import { generateInstanceId } from "ReactInstanceIdManager";
import { registerInstance, unregisterInstance } from "ReactInstancesManager";

export const wrapWithInstance = (instanceSet, WrappedComponent, reducer) => {
    return class extends React.PureComponent<any> {
        private _reducer = reducer;
        private _instanceProps = {
            instanceSet: instanceSet,
            instanceId: generateInstanceId(this.props.instanceIdPrefix)
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
    };
};
