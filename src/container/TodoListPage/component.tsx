import * as React from 'react';
import { TodoListApp } from '../TodoListApp';
import { RegisterToRootRoutes } from '../../RootRoutes';
import { GitInfo } from '../GitInfo';
import { RegisterInstanceId } from '../../RootReducer';

const GitInfoInstanceIds = ['TodoList_1'];
const TodoListAppInstanceIds = ['TodoList_1', 'TodoList_2'];

const TodoListPage = () => (
    <div>
        <span>This is Todo List Page</span>
        <TodoListApp instanceId={TodoListAppInstanceIds[0]} inputText='This is TodoList 1' />
        <TodoListApp instanceId={TodoListAppInstanceIds[1]} inputText='This is TodoList 2' />
        <GitInfo instanceId={GitInfoInstanceIds[0]} gitUrl="https://api.github.com/repos/qk0106/React-prototype" />
    </div>
);

RegisterInstanceId('GitInfos', GitInfoInstanceIds);
RegisterInstanceId('TodoLists', TodoListAppInstanceIds);
RegisterToRootRoutes('TodoList', '/todoList', 'Todo List', TodoListPage);
