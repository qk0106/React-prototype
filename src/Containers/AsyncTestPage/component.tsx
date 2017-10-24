import * as React from "react";
import { GitInfo, instancesProp as GitInfosProp } from "GitInfo";
import { TodoListApp, instancesProp as TodoListAppsProp } from "TodoListApp";
import { yieldInstanceIds, registerInstanceIds } from "Instantiator";
import { registerToRootRoutes } from "RootHelper";

const prefix = "AsyncPage";
const GitInfoInstanceIds = yieldInstanceIds(prefix, 2);
const TodoListAppInstanceIds = yieldInstanceIds(prefix, 1);

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
