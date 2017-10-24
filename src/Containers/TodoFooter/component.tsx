import { TodoFilterLink } from "TodoFilterLink";
import * as React from "react";

export const TodoFooter: React.SFC<any> = ({ instancesProp, instanceId }) => (
    <p>
        Show:{" "}
        <TodoFilterLink filter="SHOW_ALL" instancesProp={instancesProp} instanceId={instanceId}>
            All
        </TodoFilterLink>
        {", "}
        <TodoFilterLink filter="SHOW_ACTIVE" instancesProp={instancesProp} instanceId={instanceId}>
            Active
        </TodoFilterLink>
        {", "}
        <TodoFilterLink
            filter="SHOW_COMPLETED"
            instancesProp={instancesProp}
            instanceId={instanceId}
        >
            Completed
        </TodoFilterLink>
    </p>
);
