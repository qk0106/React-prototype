import * as React from "react";
import { reducer } from "./reducer";
import { wrapWithInstance } from "ReactInstanceComponentWrapper";
import { AddTodoContainer } from "AddTodoContainer";
import { TodoFooterContainer } from "TodoFooterContainer";
import { VisibleTodoListContainer } from "VisibleTodoListContainer";

const component = ({ instanceId, inputText }) => (
    <div>
        <AddTodoContainer instanceId={instanceId} inputText={inputText} />
        <VisibleTodoListContainer instanceId={instanceId} />
        <TodoFooterContainer instanceId={instanceId} />
    </div>
);

export const TodoListContainer = wrapWithInstance(component, reducer, "TodoListContainer");
