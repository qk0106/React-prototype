import * as React from "react";
import { GitInfo, instancesProp as GitInfosProp } from "GitInfo";
import { TodoListApp, instancesProp as TodoListAppsProp } from "TodoListApp";
import { yieldRegisteredInstanceIds } from "Instantiator";
import { registerToRootRoutes } from "RootHelper";

const instanceIdPrefix = "TodoListPage";
const GitInfoInstanceIds = yieldRegisteredInstanceIds(GitInfosProp, instanceIdPrefix, 1);
const TodoListAppInstanceIds = yieldRegisteredInstanceIds(TodoListAppsProp, instanceIdPrefix, 2);

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

registerToRootRoutes("TodoList", "/todoList", "Todo List", TodoListPage);
