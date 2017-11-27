import * as React from "react";
import { registerRoute } from "ReactRouteManager";
import { GitInfoContainer } from "GitInfoContainer";
import { TodoListContainer } from "TodoListContainer";
import { CountryDropDownContainer } from "CountryDropDownContainer";

const TodoListPage = () => (
    <div>
        <span>This is Todo List Page</span>
        <CountryDropDownContainer instanceIdPrefix="AsyncTestPage" />
        <TodoListContainer instanceIdPrefix="TodoListPage" inputText="This is TodoList 1" />
        <TodoListContainer instanceIdPrefix="TodoListPage" inputText="This is TodoList 2" />
        <GitInfoContainer
            instanceIdPrefix="TodoListPage"
            gitUrl="https://api.github.com/repos/qk0106/React-prototype"
        />
        <GitInfoContainer
            instanceIdPrefix="TodoListPage"
            gitUrl="https://api.github.com/repos/qk0106/ACE-online-tutor"
        />
    </div>
);

registerRoute("TodoList", "/todoList", "Todo List", TodoListPage);
