import { applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

let middlewares = [];

export const RegisterToRootMiddlewares = (middleware) => {
  middlewares.push(middleware);
}

const loggerMiddleware = createLogger();
RegisterToRootMiddlewares(loggerMiddleware);

export const FetchRootMiddlewares = () => (
  applyMiddleware(...middlewares)
);

