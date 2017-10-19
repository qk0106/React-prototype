import * as React from 'react';
import { STATE_PROP } from './const';
import { AddTodo, TodoFooter, VisibleTodoList } from '../../container';

export const TodoListApp = ({ instanceId }) => (
    <div>
        <AddTodo instanceId={instanceId} />
        <VisibleTodoList stateProp={STATE_PROP} instanceId={instanceId} />
        <TodoFooter stateProp={STATE_PROP} instanceId={instanceId} />
    </div>
);
