import * as React from "react";
import * as iassign from "immutable-assign";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import { readStore } from "ReduxStoreManager";
import { collectRoutes } from "ReactRouteManager";
import { App } from "./app"; // must isolate App for hot reload
import "./routesRegistry"; // register must happen before collectRoutes()
import "semantic-ui-css/semantic.min.css";
iassign.setOption({ freeze: true }); // throw immutable error

const store = readStore();
const routes = collectRoutes();
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
