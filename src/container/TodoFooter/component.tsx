import * as React from 'react';
import { TodoFilterLink } from '../../container';

export const TodoFooter: React.SFC<any> = ({ instanceId }) => (
    <p>
        Show:
    {' '}
        <TodoFilterLink filter="SHOW_ALL" instanceId={instanceId} >
            All
    </TodoFilterLink>
        {', '}
        <TodoFilterLink filter="SHOW_ACTIVE" instanceId={instanceId} >
            Active
    </TodoFilterLink>
        {', '}
        <TodoFilterLink filter="SHOW_COMPLETED" instanceId={instanceId} >
            Completed
    </TodoFilterLink>
    </p>
);
