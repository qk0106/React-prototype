import * as React from "react";
import { reducer } from "./reducer";
import { wrapWithInstance } from "ReactInstanceComponentWrapper";
import { AddTodoContainer } from "AddTodoContainer";
import { TodoFooterContainer } from "TodoFooterContainer";
import { VisibleTodoListContainer } from "VisibleTodoListContainer";

const component = props => (
    <div>
        <AddTodoContainer {...props} />
        <VisibleTodoListContainer {...props} />
        <TodoFooterContainer {...props} />
        <br />
    </div>
);

export const TodoListContainer = wrapWithInstance(component, reducer, "TodoListContainer");
