// register routes to root || register instanceId -> this has to happen before register reducer
import "HomePage/component";
import "AsyncTestPage/component";
import "TodoListPage/component";

// register reducers to root
import "GitInfo/reducer";
import "TodoListApp/reducer";

//register middlewares to root
import "GitInfo/actionHandler";

import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import * as iassign from "immutable-assign";
import { fetchRootReducer, fetchRootMiddlewares, fetchRootRoutes } from "RootHelper";

iassign.setOption({ freeze: true }); // throw immutable error

const store = createStore(fetchRootReducer(), fetchRootMiddlewares());
const routes = fetchRootRoutes();

render(<Provider store={store}>{routes}</Provider>, document.getElementById("app"));
