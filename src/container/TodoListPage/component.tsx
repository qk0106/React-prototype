import * as React from 'react';
import { TodoListApp } from '../../container';
import { RegisterToRootRoutes } from '../../RootRoutes';

const TodoListPage = () => (
    <div>
        <span>This is Todo List Page</span>
        <TodoListApp />
    </div>
);

RegisterToRootRoutes('TodoList', '/todoList', 'Todo List', TodoListPage);
