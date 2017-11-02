import * as React from "react";
import { AddTodo } from "AddTodo";
import { TodoFooter } from "TodoFooter";
import { VisibleTodoList } from "VisibleTodoList";
import { reducer } from "./reducer";
import { generateInstanceComponent } from "Instantiator";

const TodoListAppContainer = ({ instanceProps, inputText }) => (
    <div>
        <AddTodo instanceProps={instanceProps} inputText={inputText} />
        <VisibleTodoList instanceProps={instanceProps} />
        <TodoFooter instanceProps={instanceProps} />
    </div>
);

export const TodoListApp = generateInstanceComponent("TodoListApp", reducer, TodoListAppContainer);
