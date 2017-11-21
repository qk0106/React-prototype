const style = require("./style.less");
import * as CSSModules from "react-css-modules";
import * as React from "react";
import { reducer } from "./reducer";
import { wrapWithInstance } from "ReactInstanceComponentWrapper";
import { AddTodoContainer } from "AddTodoContainer";
import { TodoFooterContainer } from "TodoFooterContainer";
import { VisibleTodoListContainer } from "VisibleTodoListContainer";
import {} from "semantic-ui-react";

const component = props => (
    <div>
        <div styleName="todo-list">
            <p>Todo List Component</p>
            <AddTodoContainer {...props} />
            <VisibleTodoListContainer {...props} />
            <TodoFooterContainer {...props} />
        </div>
        <br />
    </div>
);

export const TodoListContainer = wrapWithInstance(
    CSSModules(component, style),
    reducer,
    "TodoListContainer"
);
