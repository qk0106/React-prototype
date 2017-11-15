import { TodoFilterLink } from "TodoFilterLink";
import * as React from "react";

export const TodoFooter: React.SFC<any> = ({ instanceProps }) => (
    <p>
        Show:{" "}
        <TodoFilterLink instanceProps={instanceProps} filter="SHOW_ALL">
            All
        </TodoFilterLink>
        {", "}
        <TodoFilterLink instanceProps={instanceProps} filter="SHOW_ACTIVE">
            Active
        </TodoFilterLink>
        {", "}
        <TodoFilterLink instanceProps={instanceProps} filter="SHOW_COMPLETED">
            Completed
        </TodoFilterLink>
    </p>
);
