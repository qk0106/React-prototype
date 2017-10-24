import * as React from "react";
import { AddTodo } from "AddTodo";
import { TodoFooter } from "TodoFooter";
import { VisibleTodoList } from "VisibleTodoList";

export const instancesProp = "TodoListApps";

export const TodoListApp = ({ instanceId, inputText }) => (
    <div>
        <AddTodo instancesProp={instancesProp} instanceId={instanceId} inputText={inputText} />
        <VisibleTodoList instancesProp={instancesProp} instanceId={instanceId} />
        <TodoFooter instancesProp={instancesProp} instanceId={instanceId} />
    </div>
);
