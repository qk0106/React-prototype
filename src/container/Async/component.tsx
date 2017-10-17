import * as React from 'react';
import * as gitInfoFoler from '../GitInfo';
import { GitInfo, GitInfoReducer } from '../GitInfo';
import { RegisterToRootRoutes } from '../../RootRoutes';
import { RegisterToRootReducer } from '../../RootReducer';

console.log(gitInfoFoler);

const STATE_PROP = 'Async_GitInfo';

const Async = () => (
    <div>
        <span>This is Async Page</span>
        <GitInfo stateProp = {STATE_PROP} />
    </div>
);

RegisterToRootReducer(STATE_PROP, GitInfoReducer);

RegisterToRootRoutes('Async', '/async', 'Async', Async);
