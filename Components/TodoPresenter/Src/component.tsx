import { wrapWithStyle } from "ReactStyleWrapper";

import * as React from "react";
const style = require("./style.less");

import { List } from "semantic-ui-react";

const component = ({ onClick, completed, text }) => (
    <List.Item
        onClick={onClick}
        style={{
            textDecoration: completed ? "line-through" : "none"
        }}
    >
        <List.Icon name="folder" />
        {text}
    </List.Item>
);

export const TodoPresenter = wrapWithStyle(style)(component);
