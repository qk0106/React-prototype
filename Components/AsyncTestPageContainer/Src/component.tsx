import { registerRoute } from "ReactRouteManager";

import * as React from "react";

import { TopAppContainer } from "TopAppContainer";
import { GitInfoAppContainer } from "GitInfoAppContainer";
import { TodoListAppContainer } from "TodoListAppContainer";
import { FitnessScoreAppContainer } from "FitnessScoreAppContainer";
import { CountryDropDownAppContainer } from "CountryDropDownAppContainer";

const component = () => {
    const id = { instanceIdPrefix: "AsyncTestPage" };
    return (
        <div>
            <span>This is Async Page</span>
            <CountryDropDownAppContainer {...id} />
            <FitnessScoreAppContainer instanceIdPrefix="AsyncTestPage_AnotherLevel" />
            <GitInfoAppContainer
                {...id}
                gitUrl="https://api.github.com/repos/qk0106/React-prototype"
            />
            <GitInfoAppContainer
                {...id}
                gitUrl="https://api.github.com/repos/qk0106/ACE-online-tutor"
            />
            <TodoListAppContainer {...id} inputText="This is TodoList in async page" />
            <TopAppContainer {...id} />
            <TopAppContainer {...id} />
        </div>
    );
};

registerRoute("AsyncTest", "/asyncTest", "Async Test", component);
