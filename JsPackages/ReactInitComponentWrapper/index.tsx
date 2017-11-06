import * as React from "react";

export const wrapWithInit = WrappedComponent => {
    // ...and returns another component...
    return class extends React.Component {
        constructor(props) {
            super(props);
            props.init();
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    };
};
