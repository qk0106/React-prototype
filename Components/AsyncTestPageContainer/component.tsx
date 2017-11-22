import * as React from "react";
import { GitInfoContainer } from "GitInfoContainer";
import { TodoListContainer } from "TodoListContainer";
import { registerRoute } from "ReactRouteManager";
import { TopContainer } from "TopContainer";
import { FitnessScoreContainer } from "FitnessScoreContainer";

const AsyncTestPage = () => (
    <div>
        <span>This is Async Page</span>
        <FitnessScoreContainer instanceIdPrefix="AnotherPage" />
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
        <TopContainer instanceIdPrefix="AsyncTestPage" />
        <TopContainer instanceIdPrefix="AsyncTestPage" />
    </div>
);

registerRoute("AsyncTest", "/asyncTest", "Async Test", AsyncTestPage);
