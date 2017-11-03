import * as React from "react";
import { GitInfo } from "GitInfo";
import { TodoLister } from "TodoLister";
import { registerRoute } from "RouteHelper";

const TodoListPage = () => (
    <div>
        <span>This is Todo List Page</span>
        <TodoLister instanceIdPrefix="TodoLister" inputText="This is TodoList 1" />
        <TodoLister instanceIdPrefix="TodoLister" inputText="This is TodoList 2" />
        <GitInfo
            instanceIdPrefix="TodoLister"
            gitUrl="https://api.github.com/repos/qk0106/React-prototype"
        />
        <GitInfo
            instanceIdPrefix="TodoLister"
            gitUrl="https://api.github.com/repos/qk0106/ACE-online-tutor"
        />
    </div>
);

registerRoute("TodoList", "/todoList", "Todo List", TodoListPage);
