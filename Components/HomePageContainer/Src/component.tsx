import { registerRoute } from "ReactRouteManager";

import * as React from "react";

const component = () => (
    <div>
        <span>This is Home</span>
    </div>
);

registerRoute("Home", "/home", "Home", component);
