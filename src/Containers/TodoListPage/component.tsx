import * as React from "react";
import { TodoListApp } from "TodoListApp";
import { registerToRootRoutes } from "RootHelper";

const TodoListPage = () => (
    <div>
        <span>This is Todo List Page</span>
        <TodoListApp inputText="This is TodoList 1" />
        <TodoListApp inputText="This is TodoList 2" />
        <TodoListApp inputText="This is TodoList 3" />
    </div>
);

registerToRootRoutes("TodoList", "/todoList", "Todo List", TodoListPage);
