import * as React from "react";
import * as iassign from "immutable-assign";
import { Provider } from "react-redux";
import "./registry"; // register has to happen before fetch

iassign.setOption({ freeze: true }); // throw immutable error

export const App = ({ store, routes }) => <Provider store={store}>{routes}</Provider>;
