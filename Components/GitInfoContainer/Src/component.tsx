import * as React from "react";
import { reducer } from "./reducer";
import { wrapWithInstance } from "ReactInstanceComponentWrapper";
import { GitInfoSubContainer } from "GitInfoSubContainer";

const component = ({ instanceProps, gitUrl }) => (
    <div>
        <GitInfoSubContainer instanceProps={instanceProps} gitUrl={gitUrl} />
    </div>
);

export const GitInfoContainer = wrapWithInstance(component, reducer);
