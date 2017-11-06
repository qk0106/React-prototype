import * as React from "react";
import { GitInfo } from "GitInfo";
import { TodoLister } from "TodoLister";
import { registerRoute } from "ReactRouteManager";

const AsyncTestPage = () => (
    <div>
        <span>This is Async Page</span>
        <GitInfo
            iPrefix="AsyncTestPage"
            gitUrl="https://api.github.com/repos/qk0106/React-prototype"
        />
        <GitInfo
            iPrefix="AsyncTestPage"
            gitUrl="https://api.github.com/repos/qk0106/ACE-online-tutor"
        />
        <TodoLister iPrefix="AsyncTestPage" inputText="This is TodoList in async page" />
    </div>
);

registerRoute("AsyncTest", "/asyncTest", "Async Test", AsyncTestPage);
