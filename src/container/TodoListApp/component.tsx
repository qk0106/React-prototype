import * as React from 'react';
import { AddTodo } from '../AddTodo';
import { TodoFooter } from '../TodoFooter';
import { VisibleTodoList } from '../VisibleTodoList';

export const TodoListApp = ({ instanceId, inputText }) => (
    <div>
        <AddTodo instanceId={instanceId} inputText={inputText} />
        <VisibleTodoList instanceId={instanceId} />
        <TodoFooter instanceId={instanceId} />
    </div>
);
