import * as React from 'react';
import { AddTodo, TodoFooter, VisibleTodoList } from '../../container';

export const TodoListApp = ({ instanceId, inputText }) => (
    <div>
        <AddTodo instanceId={instanceId} inputText={inputText} />
        <VisibleTodoList instanceId={instanceId} />
        <TodoFooter instanceId={instanceId} />
    </div>
);
