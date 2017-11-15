import * as React from "react";
import { Provider } from "react-redux";

export const App = ({ store, routes }) => <Provider store={store}>{routes}</Provider>;
