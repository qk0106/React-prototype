import * as React from "react";
import { registerRoute } from "ReactRouteManager";

const HomePage = () => (
    <div>
        <span>This is Home</span>
    </div>
);

registerRoute("Home", "/", "Home", HomePage);
