import * as React from "react";
import { registerRoute } from "RouteHelper";

const HomePage = () => (
    <div>
        <span>This is Home</span>
    </div>
);

registerRoute("Home", "/", "Home", HomePage);
