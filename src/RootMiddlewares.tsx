import { applyMiddleware } from 'redux';

let middlewares = [];

export const RegisterToRootMiddlewares = (middleware) => {
  middlewares.push(middleware);
}

const loggerMiddleware = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

RegisterToRootMiddlewares(loggerMiddleware);

export const FetchRootMiddlewares = () => (
  applyMiddleware(...middlewares)
);

