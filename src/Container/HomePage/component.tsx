import * as React from 'react';
import { RegisterToRootRoutes } from '../../RootRoutes';

const HomePage = () => (
    <div>
        <span>This is Home</span>
    </div>
);

RegisterToRootRoutes('Home', '/', 'Home', HomePage);
