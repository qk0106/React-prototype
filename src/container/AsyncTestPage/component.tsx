import * as React from 'react';
import { GitInfo } from '../../container';
import { RegisterToRootRoutes } from '../../RootRoutes';

const AsyncTestPage = () => (
    <div>
        <span>This is Async Page</span>
        <GitInfo instanceId="Async_1" gitUrl="https://api.github.com/repos/qk0106/React-prototype" />
        <GitInfo instanceId="Async_2" gitUrl="https://api.github.com/repos/qk0106/ACE-online-tutor" />
    </div>
);

RegisterToRootRoutes('AsyncTest', '/asyncTest', 'Async Test', AsyncTestPage);
