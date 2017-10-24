import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import * as iassign from "immutable-assign";

// register route and instanceId, this has to happen before register reducer
import "HomePage";
import "AsyncTestPage";
import "TodoListPage";

// register reducer
import "GitInfo/reducer";
import "TodoListApp/reducer";

//register middleware
import "GitInfo/actionHandler";

import { FetchRootReducer, FetchRootMiddlewares, FetchRootRoutes } from "RootHelper";

iassign.setOption({ freeze: true }); // throw immutable error

const store = createStore(FetchRootReducer(), FetchRootMiddlewares());

const routes = FetchRootRoutes();

render(<Provider store={store}>{routes}</Provider>, document.getElementById("app"));
