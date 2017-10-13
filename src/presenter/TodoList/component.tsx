import * as React from 'react';
import { Todo } from '../Todo';
const style = require('./style.css');

function makeTodoClick(onTodoClick, id) {
  return () => { onTodoClick(id); };
}

const rows = (todos, onTodoClick) => {
  return todos.map((todo) => (
    <Todo key={todo.id} {...todo} onClick={makeTodoClick(onTodoClick, todo.id)} />
  ));
};

export const TodoList = ({ todos, onTodoClick }) => (
  <ul className={style.ulBg}>
    {rows(todos, onTodoClick)}
  </ul>
);
