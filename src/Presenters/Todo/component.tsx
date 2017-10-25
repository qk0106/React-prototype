import * as React from "react";
import { List } from "semantic-ui-react";

export const Todo = ({ onClick, completed, text }) => (
    <List.Item
        onClick={onClick}
        style={{
            textDecoration: completed ? "line-through" : "none"
        }}
    >
        {text}
    </List.Item>
);
