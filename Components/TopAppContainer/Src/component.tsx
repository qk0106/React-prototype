import { wrapWithStyle } from "ReactStyleWrapper";
import { wrapWithInstance } from "ReactInstanceWrapper";

import * as React from "react";
import { reducer } from "./reducer";
const style = require("./style.less");

import { TopContainer } from "TopContainer";
import { GitInfoAppContainer } from "GitInfoAppContainer";
import { TodoListAppContainer } from "TodoListAppContainer";

const component = props => {
    const id = { instanceIdPrefix: props.instanceId };
    return (
        <div>
            <div styleName="top-cmp">
                <p>Top Component</p>
                <TopContainer {...props} />
                <br />
                <GitInfoAppContainer
                    {...id}
                    gitUrl="https://api.github.com/repos/qk0106/React-prototype"
                />
                <TodoListAppContainer {...id} inputText="This is TodoList in async page" />
            </div>
            <br />
        </div>
    );
};

export const TopAppContainer = wrapWithInstance(this, reducer)(wrapWithStyle(style)(component));
