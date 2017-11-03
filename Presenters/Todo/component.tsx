const style = require("./style.less");
import * as React from "react";
import * as CSSModules from "react-css-modules";
import { List } from "semantic-ui-react";

const _Todo = ({ onClick, completed, text }) => (
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

export const Todo = CSSModules(_Todo, style); // modulise style with component
