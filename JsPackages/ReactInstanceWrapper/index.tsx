import * as React from "react";
import { generateInstanceId } from "ReactInstanceIdManager";
import { registerInstance } from "ReactInstancesManager";

export const generateInstanceComponent = (instancesProp, Component, reducer) => {
    return class extends React.PureComponent<any> {
        private _reducer = reducer;
        private _instanceProps = {
            instancesProp: instancesProp,
            instanceId: generateInstanceId(this.props.iPrefix)
        };
        constructor(props) {
            super(props);
            registerInstance(this._instanceProps, this._reducer);
        }
        render() {
            return <Component instanceProps={this._instanceProps} {...this.props} />;
        }
    };
};
