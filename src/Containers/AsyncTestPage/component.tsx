import * as React from "react";
// import { GitInfo, instancesProp as GitInfosProp } from "GitInfo";
// import { TodoListApp } from "TodoListApp";
import { registerRoute } from "RouteHelper";

// const instanceIdPrefix = "AsyncPage";

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
        />*/}
    </div>
);

registerRoute("AsyncTest", "/asyncTest", "Async Test", AsyncTestPage);
