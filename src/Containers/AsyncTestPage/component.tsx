import * as React from "react";
import { GitInfo, GitInfosProp } from "GitInfo";
import { TodoListApp, TodoListAppsProp } from "TodoListApp";
import { instanceIdsGenerator } from "Instantiator";
import { registerInstanceIds, registerToRootRoutes } from "RootHelper";

const ContainerPrefix = "AsyncPage";
const GitInfoInstanceIds = instanceIdsGenerator(ContainerPrefix, 2);
const TodoListAppInstanceIds = instanceIdsGenerator(ContainerPrefix, 1);

const AsyncTestPage = () => (
    <div>
        <span>This is Async Page</span>
        <GitInfo
            instanceId={GitInfoInstanceIds[0]}
            gitUrl="https://api.github.com/repos/qk0106/React-prototype"
        />
        <GitInfo
            instanceId={GitInfoInstanceIds[1]}
            gitUrl="https://api.github.com/repos/qk0106/ACE-online-tutor"
        />
        <TodoListApp
            instanceId={TodoListAppInstanceIds[0]}
            inputText="This is TodoList 1 in Async"
        />
    </div>
);

registerInstanceIds(GitInfosProp, GitInfoInstanceIds);
registerInstanceIds(TodoListAppsProp, TodoListAppInstanceIds);
registerToRootRoutes("AsyncTest", "/asyncTest", "Async Test", AsyncTestPage);
