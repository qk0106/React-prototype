import * as React from "react";
import { registerRoute } from "ReactRouteManager";

import { GitInfo } from "GitInfo";
import { TodoList } from "TodoList";
import { CountryDropDown } from "CountryDropDown";

const TodoListPage = () => (
    <div>
        <span>This is Todo List Page</span>
        <CountryDropDown instanceIdPrefix="AsyncTestPage" />
        <TodoList instanceIdPrefix="TodoListPage" inputText="This is TodoList 1" />
        <TodoList instanceIdPrefix="TodoListPage" inputText="This is TodoList 2" />
        <GitInfo
            instanceIdPrefix="TodoListPage"
            gitUrl="https://api.github.com/repos/qk0106/React-prototype"
        />
        <GitInfo
            instanceIdPrefix="TodoListPage"
            gitUrl="https://api.github.com/repos/qk0106/ACE-online-tutor"
        />
    </div>
);

registerRoute("TodoList", "/todoList", "Todo List", TodoListPage);
