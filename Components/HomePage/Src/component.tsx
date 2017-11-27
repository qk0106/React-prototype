import * as React from "react";
import { registerRoute } from "ReactRouteManager";

const component = () => (
    <div>
        <span>This is Home</span>
    </div>
);

registerRoute("Home", "/", "Home", component);
