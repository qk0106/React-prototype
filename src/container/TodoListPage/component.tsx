import * as React from "react";
import { GitInfo, GitInfosProp } from "../GitInfo";
import { TodoListApp, TodoListAppsProp } from "../TodoListApp";
import { RegisterToRootRoutes } from "../../RootRoutes";
import { RegisterInstanceIds } from "../../RootReducer";
import { InstanceIdsGenerator } from "../../global/instantiation";

const ContainerPrefix = "TodoListPage";
const GitInfoInstanceIds = InstanceIdsGenerator(ContainerPrefix, 1);
const TodoListAppInstanceIds = InstanceIdsGenerator(ContainerPrefix, 2);

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

RegisterInstanceIds(GitInfosProp, GitInfoInstanceIds);
RegisterInstanceIds(TodoListAppsProp, TodoListAppInstanceIds);
RegisterToRootRoutes("TodoList", "/todoList", "Todo List", TodoListPage);
