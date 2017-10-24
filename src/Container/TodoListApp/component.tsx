import * as React from "react";
import { AddTodo } from "../AddTodo";
import { TodoFooter } from "../TodoFooter";
import { VisibleTodoList } from "../VisibleTodoList";

export const TodoListAppsProp = "TodoListApps";

export const TodoListApp = ({ instanceId, inputText }) => (
    <div>
        <AddTodo instancesProp={TodoListAppsProp} instanceId={instanceId} inputText={inputText} />
        <VisibleTodoList instancesProp={TodoListAppsProp} instanceId={instanceId} />
        <TodoFooter instancesProp={TodoListAppsProp} instanceId={instanceId} />
    </div>
);
