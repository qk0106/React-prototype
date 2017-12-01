import * as React from "react";
import * as iassign from "immutable-assign";
import * as ReactDOM from "react-dom";
import { createLogger } from "redux-logger";
import { AppContainer } from "react-hot-loader";
import { registerMiddleware } from "ReduxMiddlewareManager";
import App from "./app";
import "semantic-ui-css/semantic.min.css";
iassign.setOption({ freeze: true }); // throw immutable error

const loggerMiddleware = createLogger();
registerMiddleware(loggerMiddleware);

const appElement = document.getElementById("app");

ReactDOM.render(
    <AppContainer warnings={false}>
        <App />
    </AppContainer>,
    appElement
);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept("./app", () => {
        console.log("====================");
        console.log("update accepted");
        console.log("====================");
        const NextApp = require("./app").default;
        ReactDOM.render(
            <AppContainer warnings={false}>
                <NextApp />
            </AppContainer>,
            appElement
        );
    });
}
