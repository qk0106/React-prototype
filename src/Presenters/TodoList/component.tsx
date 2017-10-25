import * as React from "react";
import * as CSSModules from "react-css-modules";
const style = require("./style.less");
import { Todo } from "Todo";
import { List } from "semantic-ui-react";

const makeTodoClick = (onTodoClick, id) => () => {
    onTodoClick(id);
};

const rows = (todos, onTodoClick) => {
    return todos.map((todo, index) => (
        <Todo key={index} {...todo} onClick={makeTodoClick(onTodoClick, todo.id)} />
    ));
};

const _TodoList = ({ todos, onTodoClick }) => (
    <List bulleted styleName="ul-bg">
        {rows(todos, onTodoClick)}
    </List>
);

export const TodoList = CSSModules(_TodoList, style); // modulise style with component
