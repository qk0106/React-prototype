import * as React from "react";
import { registerToRootRoutes } from "RootHelper";

const HomePage = () => (
    <div>
        <span>This is Home</span>
    </div>
);

registerToRootRoutes("Home", "/", "Home", HomePage);
