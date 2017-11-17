import * as React from "react";
import { GitInfoContainer } from "GitInfoContainer";
import { TodoListContainer } from "TodoListContainer";
import { registerRoute } from "ReactRouteManager";
import { TopContainer } from "TopContainer";

const AsyncTestPage = () => (
    <div>
        <span>This is Async Page</span>
        <GitInfoContainer
            instanceIdPrefix="AsyncTestPage"
            gitUrl="https://api.github.com/repos/qk0106/React-prototype"
        />
        <GitInfoContainer
            instanceIdPrefix="AsyncTestPage"
            gitUrl="https://api.github.com/repos/qk0106/ACE-online-tutor"
        />
        <TodoListContainer
            instanceIdPrefix="AsyncTestPage"
            inputText="This is TodoList in async page"
        />
        <TopContainer />
    </div>
);

registerRoute("AsyncTest", "/asyncTest", "Async Test", AsyncTestPage);
