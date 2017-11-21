import * as React from "react";
import { GitInfoContainer } from "GitInfoContainer";
import { TodoListContainer } from "TodoListContainer";

export const TopContainer = ({ instanceIdPrefix }) => (
    <div>
        <span>This is TopContainer</span>
        <GitInfoContainer
            instanceIdPrefix={instanceIdPrefix + "_TopContainer"}
            gitUrl="https://api.github.com/repos/qk0106/React-prototype"
        />
        <TodoListContainer
            instanceIdPrefix={instanceIdPrefix + "_TopContainer"}
            inputText="This is TodoList in async page"
        />
    </div>
);
