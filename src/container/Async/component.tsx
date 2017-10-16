import * as React from 'react';
import { GitInfo } from '../../container';
import { STATE_PROP } from '../Async';
import { RegisterToRootRoutes } from '../../RootRoutes';

const Async = () => (
    <div>
        <span>This is Async Page</span>
        <GitInfo stateProp = {STATE_PROP} />
    </div>
);

RegisterToRootRoutes('Async', '/async', 'Async', Async);
