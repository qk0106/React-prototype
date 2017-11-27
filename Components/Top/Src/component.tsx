import { wrapWithInstance } from "ReactInstanceWrapper";

const style = require("./style.less");
import * as CSSModules from "react-css-modules";
import * as React from "react";
import {} from "semantic-ui-react";

import { reducer } from "./reducer";
import { TopContainer } from "TopContainer";
import { GitInfo } from "GitInfo";
import { TodoList } from "TodoList";

export const component = props => {
    const id = { instanceIdPrefix: props.instanceId };
    return (
        <div>
            <div styleName="top-cmp">
                <p>Top Component</p>
                <TopContainer {...props} />
                <br />
                <GitInfo {...id} gitUrl="https://api.github.com/repos/qk0106/React-prototype" />
                <TodoList {...id} inputText="This is TodoList in async page" />
            </div>
            <br />
        </div>
    );
};

export const Top = wrapWithInstance(CSSModules(component, style), reducer, "Top");
