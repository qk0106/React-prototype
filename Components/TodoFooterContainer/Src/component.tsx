import * as React from "react";
import { TodoFilterLinkContainer } from "TodoFilterLinkContainer";

export const TodoFooterContainer: React.SFC<any> = ({ instanceId }) => (
    <p>
        Show:{" "}
        <TodoFilterLinkContainer instanceId={instanceId} filter="SHOW_ALL">
            All
        </TodoFilterLinkContainer>
        {", "}
        <TodoFilterLinkContainer instanceId={instanceId} filter="SHOW_ACTIVE">
            Active
        </TodoFilterLinkContainer>
        {", "}
        <TodoFilterLinkContainer instanceId={instanceId} filter="SHOW_COMPLETED">
            Completed
        </TodoFilterLinkContainer>
    </p>
);
