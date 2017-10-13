import * as React from 'react';
import { TodoFilterLink } from '../TodoFilterLink';

export const TodoFooter: React.SFC<any> = ({ stateProp }) => (
  <p>
    Show:
    {' '}
    <TodoFilterLink filter="SHOW_ALL" stateProp = { stateProp } >
      All
    </TodoFilterLink>
    {', '}
    <TodoFilterLink filter="SHOW_ACTIVE" stateProp = { stateProp } >
      Active
    </TodoFilterLink>
    {', '}
    <TodoFilterLink filter="SHOW_COMPLETED" stateProp = { stateProp } >
      Completed
    </TodoFilterLink>
  </p>
);
