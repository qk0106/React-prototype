import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import * as iassign from "immutable-assign";
iassign.setOption({ freeze: true }); // throw immutable error

// register routes ||  register instanceId -> this has to happen before register reducer
import "HomePage/component";
import "AsyncTestPage/component";
import "TodoListPage/component";

// register reducer
import "GitInfo/reducer";
import "TodoListApp/reducer";

//register middleware
import "GitInfo/actionHandler";

import { fetchRootReducer, fetchRootMiddlewares, fetchRootRoutes } from "RootHelper";

const store = createStore(fetchRootReducer(), fetchRootMiddlewares());

const routes = fetchRootRoutes();

render(<Provider store={store}>{routes}</Provider>, document.getElementById("app"));