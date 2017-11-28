import { registerRoute } from "ReactRouteManager";

import * as React from "react";

import { GitInfoAppContainer } from "GitInfoAppContainer";
import { TodoListAppContainer } from "TodoListAppContainer";
import { CountryDropDownAppContainer } from "CountryDropDownAppContainer";

const component = () => {
    const id = { instanceIdPrefix: "AnotherTestPage" };
    return (
        <div>
            <span>This is Todo List Page</span>
            <CountryDropDownAppContainer {...id} />
            <TodoListAppContainer {...id} inputText="This is TodoList 1" />
            <TodoListAppContainer {...id} inputText="This is TodoList 2" />
            <GitInfoAppContainer
                {...id}
                gitUrl="https://api.github.com/repos/qk0106/React-prototype"
            />
            <GitInfoAppContainer
                {...id}
                gitUrl="https://api.github.com/repos/qk0106/ACE-online-tutor"
            />
        </div>
    );
};

registerRoute("AnotherTest", "/another", "Another Test", component);
