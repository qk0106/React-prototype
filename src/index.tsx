import * as React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import { fetchStore } from "ReduxHelper";
import { fetchRoutes } from "RouteHelper";
import App from "./app";

const store = fetchStore();
const routes = fetchRoutes();
const appElement = document.getElementById("app");

render(
    <AppContainer>
        <App store={store} routes={routes} />
    </AppContainer>,
    appElement
);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept("./app", () => {
        const NextApp = require<{ default: typeof App }>("./app").default;
        render(
            <AppContainer>
                <NextApp store={store} routes={routes} />
            </AppContainer>,
            appElement
        );
    });
}
