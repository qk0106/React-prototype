import * as React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import { createStore } from "redux";
import { fetchRootReducer, fetchRootMiddlewares, fetchRootRoutes } from "RootHelper";
import App from "./app";

const store = createStore(fetchRootReducer(), fetchRootMiddlewares());
const routes = fetchRootRoutes();
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
