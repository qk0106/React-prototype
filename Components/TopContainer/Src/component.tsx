const style = require("./style.less");
import * as CSSModules from "react-css-modules";
import * as React from "react";
import { reducer } from "./reducer";
import { TopSubContainer } from "TopSubContainer";
import { GitInfoContainer } from "GitInfoContainer";
import { TodoListContainer } from "TodoListContainer";
import { wrapWithInstance } from "ReactInstanceComponentWrapper";
import {} from "semantic-ui-react";

export const component = props => (
    <div>
        <div styleName="top-cmp">
            <p>Top Component</p>
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
        <br />
    </div>
);

export const TopContainer = wrapWithInstance(CSSModules(component, style), reducer, "TopContainer");
