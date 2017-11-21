import * as React from "react";
import { reducer } from "./reducer";
import { TopSubContainer } from "TopSubContainer";
import { GitInfoContainer } from "GitInfoContainer";
import { TodoListContainer } from "TodoListContainer";
import { wrapWithInstance } from "ReactInstanceComponentWrapper";

export const component = props => (
    <div>
        <TopSubContainer {...props} />
        <br />
        <GitInfoContainer
            instanceIdPrefix={props.instanceId}
            gitUrl="https://api.github.com/repos/qk0106/React-prototype"
        />
        <TodoListContainer
            instanceIdPrefix={props.instanceId}
            inputText="This is TodoList in async page"
        />
    </div>
);

export const TopContainer = wrapWithInstance(component, reducer, "TopContainer");
