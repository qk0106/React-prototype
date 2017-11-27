import * as React from "react";
import { registerRoute } from "ReactRouteManager";

import { Top } from "Top";
import { GitInfo } from "GitInfo";
import { TodoList } from "TodoList";
import { FitnessScore } from "FitnessScore";
import { CountryDropDown } from "CountryDropDown";

const AsyncTestPage = () => (
    <div>
        <span>This is Async Page</span>
        <CountryDropDown instanceIdPrefix="AsyncTestPage" />
        <FitnessScore instanceIdPrefix="AsyncTestPage_AnotherLevel" />
        <GitInfo
            instanceIdPrefix="AsyncTestPage"
            gitUrl="https://api.github.com/repos/qk0106/React-prototype"
        />
        <GitInfo
            instanceIdPrefix="AsyncTestPage"
            gitUrl="https://api.github.com/repos/qk0106/ACE-online-tutor"
        />
        <TodoList instanceIdPrefix="AsyncTestPage" inputText="This is TodoList in async page" />
        <Top instanceIdPrefix="AsyncTestPage" />
        <Top instanceIdPrefix="AsyncTestPage" />
    </div>
);

registerRoute("AsyncTest", "/asyncTest", "Async Test", AsyncTestPage);
