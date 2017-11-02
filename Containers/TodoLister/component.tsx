import * as React from "react";
import { AddTodo } from "AddTodo";
import { TodoFooter } from "TodoFooter";
import { VisibleTodoList } from "VisibleTodoList";
import { reducer } from "./reducer";
import { generateInstanceComponent } from "Instantiator";

const _TodoLister = ({ instanceProps, inputText }) => (
    <div>
        <AddTodo instanceProps={instanceProps} inputText={inputText} />
        <VisibleTodoList instanceProps={instanceProps} />
        <TodoFooter instanceProps={instanceProps} />
    </div>
);

export const TodoLister = generateInstanceComponent("TodoListers", _TodoLister, reducer);
