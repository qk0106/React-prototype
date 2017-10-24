import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import * as iassign from "immutable-assign";
import "./registry";
import { fetchRootReducer, fetchRootMiddlewares, fetchRootRoutes } from "RootHelper";

iassign.setOption({ freeze: true }); // throw immutable error

const store = createStore(fetchRootReducer(), fetchRootMiddlewares());
const routes = fetchRootRoutes();

render(<Provider store={store}>{routes}</Provider>, document.getElementById("app"));
