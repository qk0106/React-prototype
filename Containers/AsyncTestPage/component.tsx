import * as React from "react";
import { GitInfo } from "GitInfo";
import { TodoLister } from "TodoLister";
import { registerRoute } from "RouteHelper";

const AsyncTestPage = () => (
    <div key="AsyncTestPage">
        <span>This is Async Page</span>
        <GitInfo gitUrl="https://api.github.com/repos/qk0106/React-prototype" />
        <GitInfo gitUrl="https://api.github.com/repos/qk0106/ACE-online-tutor" />
        <TodoLister inputText="This is TodoList in async page" />
    </div>
);

registerRoute("AsyncTest", "/asyncTest", "Async Test", AsyncTestPage);
