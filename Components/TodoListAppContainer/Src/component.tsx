import { wrapWithStyle } from "ReactStyleWrapper";
import { wrapWithInstance } from "ReactInstanceWrapper";

import * as React from "react";
import { reducer } from "./reducer";
const style = require("./style.less");

import { AddTodoContainer } from "AddTodoContainer";
import { TodoListContainer } from "TodoListContainer";
import { TodoFooterContainer } from "TodoFooterContainer";

const component = props => (
    <div>
        <div styleName="todo-list">
            <p>Todo List Component</p>
            <AddTodoContainer {...props} />
            <TodoListContainer {...props} />
            <TodoFooterContainer {...props} />
        </div>
        <br />
    </div>
);

export const TodoListAppContainer = wrapWithInstance(this, reducer)(
    wrapWithStyle(style)(component)
);
