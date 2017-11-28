import dynamicMiddlewares, { addMiddleware } from "redux-dynamic-middlewares";

export const registerMiddleware = middleware => {
    addMiddleware(middleware);
};

export const collectMiddlewares = () => dynamicMiddlewares;
