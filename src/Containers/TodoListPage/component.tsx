import * as React from "react";
import { GitInfo, GitInfosProp } from "GitInfo";
import { TodoListApp, TodoListAppsProp } from "TodoListApp";
import { instanceIdsGenerator, registerInstanceIds } from "Instantiator";
import { registerToRootRoutes } from "RootHelper";

const ContainerPrefix = "TodoListPage";
const GitInfoInstanceIds = instanceIdsGenerator(ContainerPrefix, 1);
const TodoListAppInstanceIds = instanceIdsGenerator(ContainerPrefix, 2);

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
