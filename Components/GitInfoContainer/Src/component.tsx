import * as React from "react";
import { reducer } from "./reducer";
import { wrapWithInstance } from "ReactInstanceComponentWrapper";
import { GitInfoSubContainer } from "GitInfoSubContainer";

const component = ({ instanceId, gitUrl }) => (
    <div>
        <GitInfoSubContainer instanceId={instanceId} gitUrl={gitUrl} />
    </div>
);

export const GitInfoContainer = wrapWithInstance(component, reducer, "GitInfoContainer");
