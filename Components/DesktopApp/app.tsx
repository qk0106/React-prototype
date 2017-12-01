import * as React from "react";

import { Provider } from "react-redux";
import { readStore } from "ReduxStoreManager";
import { collectRoutes } from "ReactRouteManager";
import "./routesRegistry"; // register must happen before collectRoutes()

export default class App extends React.Component<any> {
    render() {
        const store = readStore();
        const routes = collectRoutes();
        return <Provider store={store}>{routes}</Provider>;
    }
}
