import * as React from "react";
import { GitInfor } from "GitInfor";
import { TodoLister } from "TodoLister";
import { registerRoute } from "ReactRouteManager";

const AsyncTestPage = () => (
    <div>
        <span>This is Async Page</span>
        <GitInfor
            instanceIdPrefix="AsyncTestPage"
            gitUrl="https://api.github.com/repos/qk0106/React-prototype"
        />
        <GitInfor
            instanceIdPrefix="AsyncTestPage"
            gitUrl="https://api.github.com/repos/qk0106/ACE-online-tutor"
        />
        <TodoLister instanceIdPrefix="AsyncTestPage" inputText="This is TodoList in async page" />
    </div>
);

registerRoute("AsyncTest", "/asyncTest", "Async Test", AsyncTestPage);
