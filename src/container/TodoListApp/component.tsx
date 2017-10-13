import * as React from 'react';
import { STATE_PROP } from './const';
import { AddTodo } from '../AddTodo';
import { TodoFooter } from '../TodoFooter';
import { VisibleTodoList } from '../VisibleTodoList';

export const TodoListApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList stateProp = { STATE_PROP } />
    <TodoFooter stateProp = { STATE_PROP } />
  </div>
);

