# React-prototype
Dylan's React Prototype (Decentralised and Flat Style)

## Libraries:
 - Webpack
 - React
 - Redux
 - TypeScript
 - LESS
 - CSS Module
 - Semantic UI
 - Simple express as server
 - Hot Reload (webpack-hot-middleware & react-hot-loader)

## Features:
 - Modularise Everything: 
   - Keep everything related as a module staying in one folder. (component, reducer, action, middleware, style and so on)
 - Flatten Folder Structure.
   - Assume every component will be reused in the future.
   - Build flat strucure instead of nested.
   - No common or gloabal concept.
 - Decentralised Management Style.
   - Management load of route, reducer, middlewares, instance are distributed 
   - to the registrition of the compoenent/module itself.
 - Separation of Containers and Presneters: 
   - Purify containers (only state and dispatch mapping) and presenters (only html and style),
   - so that containers can be fully reused with React Native.
 - Instantiate Module
   - Assume every component will be reused in the future.
   - Instantiate component and reducer so that it can be used multple times without state conflict.

## Future Improvements:
 - Complete TS Typings
 - React Helmet for SEO
 - Server side rendering for Performance
 - Code spliting for Performance
 - Request ID and global error handling
 - Karma and unit testing
 - Producion config and minify & uglify

## Original Boilerplate: 
 - Vortigern: https://github.com/barbar/vortigern

## Advisor:
 - Paul Li <paul.li@shroogal.com.au>