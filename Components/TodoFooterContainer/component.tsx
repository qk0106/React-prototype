import { TodoFilterLinkContainer } from "TodoFilterLinkContainer";
import * as React from "react";

export const TodoFooterContainer: React.SFC<any> = ({ instanceProps }) => (
    <p>
        Show:{" "}
        <TodoFilterLinkContainer instanceProps={instanceProps} filter="SHOW_ALL">
            All
        </TodoFilterLinkContainer>
        {", "}
        <TodoFilterLinkContainer instanceProps={instanceProps} filter="SHOW_ACTIVE">
            Active
        </TodoFilterLinkContainer>
        {", "}
        <TodoFilterLinkContainer instanceProps={instanceProps} filter="SHOW_COMPLETED">
            Completed
        </TodoFilterLinkContainer>
    </p>
);
