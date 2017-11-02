import * as React from "react";
import { AddTodo } from "AddTodo";
import { TodoFooter } from "TodoFooter";
import { VisibleTodoList } from "VisibleTodoList";
import { reducer } from "./reducer";
import { generateInstanceComponent } from "Instantiator";

const _TodoListApp = ({ instanceProps, ownProps }) => (
    <div>
        <AddTodo instanceProps={instanceProps} inputText={ownProps.inputText} />
        <VisibleTodoList instanceProps={instanceProps} />
        <TodoFooter instanceProps={instanceProps} />
    </div>
);

export const TodoListApp = generateInstanceComponent("TodoListApps", reducer, _TodoListApp);
