import * as React from 'react';
import { AddTodo, TodoFooter, VisibleTodoList } from '../../container'; 

export const TodoListApp = ({ instanceId }) => (
    <div>
        <AddTodo instanceId={instanceId} />
        <VisibleTodoList instanceId={instanceId} />
        <TodoFooter instanceId={instanceId} />
    </div>
);
