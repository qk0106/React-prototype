import * as React from 'react';
import { GitInfo } from '../../container';
import { RegisterToRootRoutes } from '../../RootRoutes';

export const STATE_PROP = 'Async_GitInfo';

const Async = () => (
    <div>
        <span>This is Async Page</span>
        <GitInfo stateProp = {STATE_PROP} />
    </div>
);

RegisterToRootRoutes('Async', '/async', 'Async', Async);
