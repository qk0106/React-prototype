import * as React from 'react';
import { Todo } from '../../presenter';
import * as CSSModules from 'react-css-modules';
const style = require('./style.less');

function makeTodoClick(onTodoClick, id) {
  return () => { onTodoClick(id); };
}

const rows = (todos, onTodoClick) => {
  return todos.map((todo) => (
    <Todo key={todo.id} {...todo} onClick={makeTodoClick(onTodoClick, todo.id)} />
  ));
};

const TodoListRSC = ({ todos, onTodoClick }) => (
  <ul styleName='ul-bg'>
    {rows(todos, onTodoClick)}
  </ul>
);

export const TodoList = CSSModules(TodoListRSC, style); // modulise style with component