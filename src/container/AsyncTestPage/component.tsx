import * as React from 'react';
import { GitInfo, GitInfosProp } from '../GitInfo';
import { TodoListApp, TodoListAppsProp } from '../TodoListApp';
import { RegisterToRootRoutes } from '../../RootRoutes';
import { RegisterInstanceId } from '../../RootReducer';

const GitInfoInstanceIds = ['AsyncPage_1', 'AsyncPage_2'];
const TodoListAppInstanceIds = ['AsyncPage_1'];

const AsyncTestPage = () => (
    <div>
        <span>This is Async Page</span>
        <GitInfo instanceId={GitInfoInstanceIds[0]} gitUrl="https://api.github.com/repos/qk0106/React-prototype" />
        <GitInfo instanceId={GitInfoInstanceIds[1]} gitUrl="https://api.github.com/repos/qk0106/ACE-online-tutor" />
        <TodoListApp instanceId={TodoListAppInstanceIds[0]} inputText='This is TodoList 1 in Async' />
    </div>
);

RegisterInstanceId(GitInfosProp, GitInfoInstanceIds);
RegisterInstanceId(TodoListAppsProp, TodoListAppInstanceIds);
RegisterToRootRoutes('AsyncTest', '/asyncTest', 'Async Test', AsyncTestPage);
