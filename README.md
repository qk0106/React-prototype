# React-prototype
Dylan's React Prototype (Decentralised and Flat Style)

# Techs Used:
1. Webpack
2. React
3. Redux
4. TypeScript
5. LESS
6. CSS Module
7. Semantic UI
8. Hot Reload

# Features:
1. Modularise Everything: 
 - Keep everything related as a module staying in one folder. (component, reducer, action, middleware, style and so on)
2. Flatten Folder Structure.
 - Assume every component will be reused in the future.
 - Build flat strucure instead of nested.
 - No common or gloabal concept.
3. Decentralised Management Style.
 - Management load of route, reducer, middlewares, instance are distributed 
 - to the registrition of the compoenent/module itself.
5. Separation of Containers and Presneters: 
 - Purify containers (only state and dispatch mapping) and presenters (only html and style),
 - so that containers can be fully reused with React Native.
6. Instantiate Module
 - Assume every component will be reused in the future.
 - Instantiate component and reducer so that it can be used multple times without state conflict.
