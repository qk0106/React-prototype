import * as React from "react";

export const wrapWithInit = WrappedComponent => {
    class InitWrapper extends React.PureComponent {
        constructor(props) {
            super(props);
            props.init();
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    }
    return InitWrapper;
};
