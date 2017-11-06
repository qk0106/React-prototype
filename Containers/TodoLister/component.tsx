import * as React from "react";
import { reducer } from "./reducer";
import { AddTodo } from "AddTodo";
import { TodoFooter } from "TodoFooter";
import { VisibleTodoList } from "VisibleTodoList";
import { wrapWithInstance } from "ReactInstanceComponentWrapper";

const _TodoLister = ({ instanceProps, inputText }) => (
    <div>
        <AddTodo instanceProps={instanceProps} inputText={inputText} />
        <VisibleTodoList instanceProps={instanceProps} />
        <TodoFooter instanceProps={instanceProps} />
    </div>
);

export const TodoLister = wrapWithInstance("TodoListers", _TodoLister, reducer);
