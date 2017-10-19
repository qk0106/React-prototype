import * as React from 'react';
import { STATE_PROP } from './const';
import { AddTodo, TodoFooter, VisibleTodoList } from '../../container';

export const TodoListApp = () => (
    <div>
        <AddTodo />
        <VisibleTodoList stateProp={STATE_PROP} />
        <TodoFooter stateProp={STATE_PROP} />
    </div>
);