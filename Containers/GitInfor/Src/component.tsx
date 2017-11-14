import * as React from "react";
import { reducer } from "./reducer";
import { wrapWithInstance } from "ReactInstanceComponentWrapper";
import { GitInfo } from "GitInfo";

const _GitInfor = ({ instanceProps, gitUrl }) => (
    <div>
        <GitInfo instanceProps={instanceProps} gitUrl={gitUrl} />
    </div>
);

export const GitInfor = wrapWithInstance("GitInfors", _GitInfor, reducer);
