import * as React from "react";
import { RegisterToRootRoutes } from "RootHelper";

const HomePage = () => (
    <div>
        <span>This is Home</span>
    </div>
);

RegisterToRootRoutes("Home", "/", "Home", HomePage);
