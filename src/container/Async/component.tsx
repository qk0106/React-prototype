import * as React from 'react';
import { GitInfo, GitInfoReducer } from '../../container';
import { RegisterToRootRoutes } from '../../RootRoutes';
import { RegisterToRootReducer } from '../../RootReducer';

const STATE_PROP_1 = 'Async_GitInfo_1';
const STATE_PROP_2 = 'Async_GitInfo_2';

const Async = () => (
    <div>
        <span>This is Async Page</span>
        <GitInfo stateProp = {STATE_PROP_1} />
        <GitInfo stateProp = {STATE_PROP_2} />
    </div>
);

RegisterToRootReducer(STATE_PROP_1, GitInfoReducer);
RegisterToRootReducer(STATE_PROP_2, GitInfoReducer);

RegisterToRootRoutes('Async', '/async', 'Async', Async);
