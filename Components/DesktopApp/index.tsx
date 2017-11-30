import * as React from "react";
import * as iassign from "immutable-assign";
import * as ReactDOM from "react-dom";
import { createLogger } from "redux-logger";
import { AppContainer } from "react-hot-loader";
import { registerMiddleware } from "ReduxMiddlewareManager";
import { readStore } from "ReduxStoreManager";
import { collectRoutes } from "ReactRouteManager";
import { App } from "./app"; // must isolate App for hot reload
import "./routesRegistry"; // register must happen before collectRoutes()
import "semantic-ui-css/semantic.min.css";
iassign.setOption({ freeze: true }); // throw immutable error

const loggerMiddleware = createLogger();
registerMiddleware(loggerMiddleware);

const store = readStore();
const routes = collectRoutes();
const appElement = document.getElementById("app");

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component store={store} routes={routes} />
        </AppContainer>,
        appElement
    );
};

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept("./app", () => {
        render(App);
    });
}
