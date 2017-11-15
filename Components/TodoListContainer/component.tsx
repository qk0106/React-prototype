import * as React from "react";
import { reducer } from "./reducer";
import { AddTodoContainer } from "AddTodoContainer";
import { TodoFooterContainer } from "TodoFooterContainer";
import { VisibleTodoListContainer } from "VisibleTodoListContainer";
import { wrapWithInstance } from "ReactInstanceComponentWrapper";

const TodoList = ({ instanceProps, inputText }) => (
    <div>
        <AddTodoContainer instanceProps={instanceProps} inputText={inputText} />
        <VisibleTodoListContainer instanceProps={instanceProps} />
        <TodoFooterContainer instanceProps={instanceProps} />
    </div>
);

export const TodoListContainer = wrapWithInstance("TodoListContainers", TodoList, reducer);
