import * as React from 'react';
import { GitInfo } from '../../container';
import { RegisterToRootRoutes } from '../../RootRoutes';

const Async = () => (
    <div>
        <span>This is Async Page</span>
        <GitInfo/>
        <GitInfo/>
    </div>
);

RegisterToRootRoutes('Async', '/async', 'Async', Async);
