import * as React from "react";
import { Provider } from "react-redux";

export default class App extends React.Component<any> {
    render() {
        const { store, routes } = this.props;
        return <Provider store={store}>{routes}</Provider>;
    }
}
