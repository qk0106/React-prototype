import * as React from "react";
import { reducer } from "./reducer";
import { wrapWithInstance } from "ReactInstanceComponentWrapper";
import { GitInfoSubContainer } from "GitInfoSubContainer";

const component = props => (
    <div>
        <GitInfoSubContainer {...props} />
    </div>
);

export const GitInfoContainer = wrapWithInstance(component, reducer, "GitInfoContainer");
