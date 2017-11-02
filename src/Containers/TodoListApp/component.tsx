import * as React from "react";
import { AddTodo } from "AddTodo";
import { TodoFooter } from "TodoFooter";
import { VisibleTodoList } from "VisibleTodoList";
import { reducer } from "./reducer";
import { generateInstanceComponent } from "Instantiator";

const TodoListAppContainer = ({ instancesProp, instanceId, otherProps }) => (
    <div>
        <AddTodo
            instancesProp={instancesProp}
            instanceId={instanceId}
            inputText={otherProps.inputText}
        />
        <VisibleTodoList instancesProp={instancesProp} instanceId={instanceId} />
        <TodoFooter instancesProp={instancesProp} instanceId={instanceId} />
    </div>
);

export const TodoListApp = generateInstanceComponent("TodoListApp", reducer, TodoListAppContainer);
