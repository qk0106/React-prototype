import { wrapWithStyle } from "ReactStyleWrapper";

import * as React from "react";
const style = require("./style.less");

import { TodoPresenter } from "TodoPresenter";
import { List } from "semantic-ui-react";

const makeTodoClick = (onTodoClick, id) => () => {
    onTodoClick(id);
};

const rows = (todos, onTodoClick) => {
    return todos.map((todo, index) => (
        <TodoPresenter key={index} {...todo} onClick={makeTodoClick(onTodoClick, todo.id)} />
    ));
};

const component = ({ todos, onTodoClick }) => (
    <List animated bulleted styleName="ul-bg">
        {rows(todos, onTodoClick)}
    </List>
);

export const TodoListPresenter = wrapWithStyle(style)(component);
