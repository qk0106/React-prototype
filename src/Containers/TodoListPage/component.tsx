import * as React from "react";
// import { GitInfo } from "GitInfo";
import { TodoListApp } from "TodoListApp";
import { registerRoute } from "RouteHelper";

const TodoListPage = () => (
    <div>
        <span>This is Todo List Page</span>
        <TodoListApp inputText="This is TodoList 1" />
        <TodoListApp inputText="This is TodoList 2" />
        {/* <GitInfo gitUrl="https://api.github.com/repos/qk0106/React-prototype" /> */}
    </div>
);

registerRoute("TodoList", "/todoList", "Todo List", TodoListPage);
