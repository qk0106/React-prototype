import * as React from "react";
import { registerRoute } from "ReactRouteManager";

import { GitInfo } from "GitInfo";
import { TodoList } from "TodoList";
import { CountryDropDown } from "CountryDropDown";

const component = () => {
    const id = { instanceIdPrefix: "AnotherTestPage" };
    return (
        <div>
            <span>This is Todo List Page</span>
            <CountryDropDown {...id} />
            <TodoList {...id} inputText="This is TodoList 1" />
            <TodoList {...id} inputText="This is TodoList 2" />
            <GitInfo {...id} gitUrl="https://api.github.com/repos/qk0106/React-prototype" />
            <GitInfo {...id} gitUrl="https://api.github.com/repos/qk0106/ACE-online-tutor" />
        </div>
    );
};

registerRoute("AnotherTest", "/another", "Another Test", component);
