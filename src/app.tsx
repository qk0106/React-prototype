import * as React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import * as iassign from "immutable-assign";
import "./registry"; // register has to happen before fetch
import { fetchRootReducer, fetchRootMiddlewares, fetchRootRoutes } from "RootHelper";
import "semantic-ui-css/semantic.min.css";

iassign.setOption({ freeze: true }); // throw immutable error

const store = createStore(fetchRootReducer(), fetchRootMiddlewares());
const routes = fetchRootRoutes();
const App = () => <Provider store={store}>{routes}</Provider>;
export default App;
