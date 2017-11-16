import * as React from "react";
import { reducer } from "./reducer";
import { wrapWithInstance } from "ReactInstanceComponentWrapper";
import { AddTodoContainer } from "AddTodoContainer";
import { TodoFooterContainer } from "TodoFooterContainer";
import { VisibleTodoListContainer } from "VisibleTodoListContainer";

const component = ({ instanceProps, inputText }) => (
    <div>
        <AddTodoContainer instanceProps={instanceProps} inputText={inputText} />
        <VisibleTodoListContainer instanceProps={instanceProps} />
        <TodoFooterContainer instanceProps={instanceProps} />
    </div>
);

export const instanceSet = "TodoListContainers";
export const TodoListContainer = wrapWithInstance(component, instanceSet, reducer);
