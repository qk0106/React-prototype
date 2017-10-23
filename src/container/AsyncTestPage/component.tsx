import * as React from 'react';
import { GitInfo } from '../GitInfo';
import { RegisterToRootRoutes } from '../../RootRoutes';
import { RegisterInstanceId } from '../../RootReducer';

const GitInfoInstanceIds = ['Async_1', 'Async_2'];
RegisterInstanceId('GitInfos', GitInfoInstanceIds);

const AsyncTestPage = () => (
    <div>
        <span>This is Async Page</span>
        <GitInfo instanceId={GitInfoInstanceIds[0]} gitUrl="https://api.github.com/repos/qk0106/React-prototype" />
        <GitInfo instanceId={GitInfoInstanceIds[1]} gitUrl="https://api.github.com/repos/qk0106/ACE-online-tutor" />
    </div>
);

RegisterToRootRoutes('AsyncTest', '/asyncTest', 'Async Test', AsyncTestPage);
