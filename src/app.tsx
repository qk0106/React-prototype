import * as React from "react";
import { Provider } from "react-redux";
import * as iassign from "immutable-assign";
import "./registry"; // register has to happen before fetch
import "semantic-ui-css/semantic.min.css";

iassign.setOption({ freeze: true }); // throw immutable error

const App = ({ store, routes }) => <Provider store={store}>{routes}</Provider>;
export default App;
