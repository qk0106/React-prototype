import * as React from 'react';
import { TodoListApp } from '../../container';
import { RegisterToRootRoutes } from '../../RootRoutes';

const TodoListPage = () => (
    <div>
        <span>This is Todo List Page</span>
        <TodoListApp instanceId='TodoList_1' inputText='This is TodoList 1' />
        <TodoListApp instanceId='TodoList_2' inputText='This is TodoList 2' />
    </div>
);

RegisterToRootRoutes('TodoList', '/todoList', 'Todo List', TodoListPage);
