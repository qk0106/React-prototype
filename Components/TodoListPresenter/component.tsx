const style = require("./style.less");
import * as React from "react";
import * as CSSModules from "react-css-modules";
import { List } from "semantic-ui-react";
import { TodoPresenter } from "TodoPresenter";

const makeTodoClick = (onTodoClick, id) => () => {
    onTodoClick(id);
};

const rows = (todos, onTodoClick) => {
    return todos.map((todo, index) => (
        <TodoPresenter key={index} {...todo} onClick={makeTodoClick(onTodoClick, todo.id)} />
    ));
};

const _TodoListPresenter = ({ todos, onTodoClick }) => (
    <List animated bulleted styleName="ul-bg">
        {rows(todos, onTodoClick)}
    </List>
);

export const TodoListPresenter = CSSModules(_TodoListPresenter, style); // modulise style with component
