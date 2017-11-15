import * as React from "react";
import { reducer } from "./reducer";
import { wrapWithInstance } from "ReactInstanceComponentWrapper";
import { GitInfoSubContainer } from "GitInfoSubContainer";

const GitInfo = ({ instanceProps, gitUrl }) => (
    <div>
        <GitInfoSubContainer instanceProps={instanceProps} gitUrl={gitUrl} />
    </div>
);

export const GitInfoContainer = wrapWithInstance("GitInfoContainers", GitInfo, reducer);
