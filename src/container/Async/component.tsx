import * as React from 'react';
import { GitInfo } from '../GitInfo';
import { GetInfoReducer } from '../GitInfo';
import * as GetInfoFolder from '../GitInfo';
import { RegisterToRootRoutes } from '../../RootRoutes';
import { RegisterToRootReducer } from '../../RootReducer';

const STATE_PROP = 'Async_GitInfo';

console.log(GetInfoFolder);


const Async = () => (
    <div>
        <span>This is Async Page</span>
        <GitInfo stateProp = {STATE_PROP} />
    </div>
);

RegisterToRootRoutes('Async', '/async', 'Async', Async);

RegisterToRootReducer('Async_GitInfo', GetInfoReducer);