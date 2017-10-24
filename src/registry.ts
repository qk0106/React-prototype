// register routes to root || register instanceId -> this has to happen before register reducer
import "HomePage/component";
import "AsyncTestPage/component";
import "TodoListPage/component";

// register reducers to root
import "GitInfo/reducer";
import "TodoListApp/reducer";

//register middlewares to root
import "GitInfo/actionHandler";
