import * as React from 'react';
import { GitInfo } from '../../container';
import { RegisterToRootRoutes } from '../../RootRoutes';

const Async = () => (
    <div>
        <span>This is Async Page</span>
        <GitInfo instanceId="Async_1" />
        <GitInfo instanceId="Async_2" />
    </div>
);

RegisterToRootRoutes('Async', '/async', 'Async', Async);
