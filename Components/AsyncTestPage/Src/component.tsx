import * as React from "react";
import { registerRoute } from "ReactRouteManager";

import { Top } from "Top";
import { GitInfo } from "GitInfo";
import { TodoList } from "TodoList";
import { FitnessScore } from "FitnessScore";
import { CountryDropDown } from "CountryDropDown";

const component = () => {
    const id = { instanceIdPrefix: "AsyncTestPage" };
    return (
        <div>
            <span>This is Async Page</span>
            <CountryDropDown {...id} />
            <FitnessScore instanceIdPrefix="AsyncTestPage_AnotherLevel" />
            <GitInfo {...id} gitUrl="https://api.github.com/repos/qk0106/React-prototype" />
            <GitInfo {...id} gitUrl="https://api.github.com/repos/qk0106/ACE-online-tutor" />
            <TodoList {...id} inputText="This is TodoList in async page" />
            <Top {...id} />
            <Top {...id} />
        </div>
    );
};

registerRoute("AsyncTest", "/asyncTest", "Async Test", component);
