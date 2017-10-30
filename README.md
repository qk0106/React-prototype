# React Prototype
Dylan's React Prototype (Decentralised and Flat Style)

## Libraries:
 - Node (yarn recommended)
 - Webpack
 - React
 - Redux
 - TypeScript
 - LESS
 - CSS Module
 - Semantic UI
 - Express (simple server)
 - Hot Reload (webpack-hot-middleware & react-hot-loader)
 - immutable-assign

## Features:
 - Modularize Everything
   - Keep everything related as a module staying in one folder. 
   - (component, reducer, action, middleware, style and so on).
   - No need to open multiple folders to change one module.
 - Flatten Folder Structure
   - Assume every module will be reused in the future.
   - Build flat strucure instead of nested.
   - No common or gloabal concept.
   - More friendly to import.
 - Decentralised Management Style
   - Management load of route, reducer, middlewares, instance are distributed 
   - to the registrition of the compoenent/module itself.
   - Each module maintain itself for adding and removing, no need to change a centralised place.
 - Pure Separation of Containers and Presneters
   - Purify containers (only state and dispatch mapping) and presenters (only html and style),
   - so that containers can be fully reused with React Native.
   - Satisfy the OCD (obsessive-compulsive disorder). XD
 - Instantiate Module
   - Assume every module will be reused in the future.
   - Instantiate component and reducer so that it can be used multple times without state conflict.
   - At first it solves the desire to use the same module mutlitple times, but do not want to maintain state with array.
   - Instantiation should always happen, because of initial motivation of modularization - reusability.

## Future Improvements:
 - Dependecy Injection
 - Async Props (react connect ?)
 - Complete TS Typings
 - React Helmet for SEO
 - Server side rendering for performance
 - Code spliting for performance
 - Request ID and global error handling
 - Karma and unit testing
 - Producion config and minify & uglify
 - Yaml
 - Cordova

## Original Boilerplate: 
 - Vortigern: https://github.com/barbar/vortigern

## Advisor:
 - Paul Li - <paul.li@shroogal.com.au> - Author of 'immutable-assign'

## To Run
```bash
$ yarn install
$ yarn start
```

## For Uncovered Information:
Please ref to package.json