import * as React from 'react';
import { RegisterToRootRoutes } from '../../RootRoutes';

const Home = () => (
    <div>
        <span>This is Home</span>
    </div>
);

RegisterToRootRoutes('Home', '/', 'Home', Home);
