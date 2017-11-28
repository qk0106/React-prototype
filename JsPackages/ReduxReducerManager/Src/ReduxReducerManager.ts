let reducerRegistry = {};

export const registerReducer = (reducer, componentName) => {
    if (reducerRegistry[componentName] === undefined)
        reducerRegistry[componentName] = { reducer, counter: 1 };
    else reducerRegistry[componentName].counter++;
};

export const unregisterReducer = componentName => {
    reducerRegistry[componentName].counter--;
    if (reducerRegistry[componentName].counter < 1) reducerRegistry[componentName] = undefined;
};

export const collectReducers = () => reducerRegistry;
