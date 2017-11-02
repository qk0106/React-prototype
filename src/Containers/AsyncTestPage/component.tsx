import * as React from "react";
// import { GitInfo, instancesProp as GitInfosProp } from "GitInfo";
// import { TodoListApp } from "TodoListApp";
// import { yieldRegisteredInstanceIds } from "Instantiator";
import { registerToRootRoutes } from "RootHelper";

// const instanceIdPrefix = "AsyncPage";
// const GitInfoInstanceIds = yieldRegisteredInstanceIds(GitInfosProp, instanceIdPrefix, 2);
// const TodoListAppInstanceIds = yieldRegisteredInstanceIds("sss", instanceIdPrefix, 2);

const AsyncTestPage = () => (
    <div>
        <span>This is Async Page</span>
        {/* <GitInfo
            instanceId={GitInfoInstanceIds[0]}
            gitUrl="https://api.github.com/repos/qk0106/React-prototype"
        />
        <GitInfo
            instanceId={GitInfoInstanceIds[1]}
            gitUrl="https://api.github.com/repos/qk0106/ACE-online-tutor"
        />
    </div>
);

registerToRootRoutes("AsyncTest", "/asyncTest", "Async Test", AsyncTestPage);
