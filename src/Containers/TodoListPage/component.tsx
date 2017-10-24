import * as React from "react";
import { GitInfo, instancesProp as GitInfosProp } from "GitInfo";
import { TodoListApp, instancesProp as TodoListAppsProp } from "TodoListApp";
import { yieldInstanceIds, registerInstanceIds } from "Instantiator";
import { registerToRootRoutes } from "RootHelper";

const prefix = "TodoListPage";
const GitInfoInstanceIds = yieldInstanceIds(prefix, 1);
const TodoListAppInstanceIds = yieldInstanceIds(prefix, 2);

const TodoListPage = () => (
    <div>
        <span>This is Todo List Page</span>
        <TodoListApp instanceId={TodoListAppInstanceIds[0]} inputText="This is TodoList 1" />
        <TodoListApp instanceId={TodoListAppInstanceIds[1]} inputText="This is TodoList 2" />
        <GitInfo
            instanceId={GitInfoInstanceIds[0]}
            gitUrl="https://api.github.com/repos/qk0106/React-prototype"
        />
    </div>
);

registerInstanceIds(GitInfosProp, GitInfoInstanceIds);
registerInstanceIds(TodoListAppsProp, TodoListAppInstanceIds);
registerToRootRoutes("TodoList", "/todoList", "Todo List", TodoListPage);
