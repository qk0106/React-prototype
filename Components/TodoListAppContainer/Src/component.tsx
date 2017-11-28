import * as React from "react";
import { wrapWithInstance } from "ReactInstanceWrapper";

const style = require("./style.less");
import { wrapWithStyle } from "ReactStyleWrapper";

import { reducer } from "./reducer";
import { AddTodoContainer } from "AddTodoContainer";
import { TodoFooterContainer } from "TodoFooterContainer";
import { TodoListContainer } from "TodoListContainer";

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
