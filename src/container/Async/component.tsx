import * as React from 'react';
import { GitInfo, GitInfoReducer } from '../../container';
import { RegisterToRootRoutes } from '../../RootRoutes';
import { RegisterToRootReducer } from '../../RootReducer';

const STATE_PROP = 'Async_GitInfo';

const Async = () => (
    <div>
        <span>This is Async Page</span>
        <GitInfo stateProp = {STATE_PROP} />
    </div>
);

RegisterToRootReducer(STATE_PROP, GitInfoReducer);

RegisterToRootRoutes('Async', '/async', 'Async', Async);
