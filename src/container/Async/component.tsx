import * as React from 'react';
import { GitInfo, GitInfoReducer } from '../GitInfo';
import { RegisterToRootRoutes } from '../../RootRoutes';
import { RegisterToRootReducer } from '../../RootReducer';

const STATE_PROP = 'Async_GitInfo';

const Async = () => (
    <div>
        <span>This is Async Page</span>
        <GitInfo stateProp = {STATE_PROP} />
    </div>
);

RegisterToRootRoutes('Async', '/async', 'Async', Async);

RegisterToRootReducer(STATE_PROP, GitInfoReducer);