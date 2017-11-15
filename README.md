# React Prototype
Dylan's React Prototype (Decentralised and Flat Style)

## Libraries
 - React
 - Redux
 - TypeScript
 - Webpack
 - LESS
 - CSS Module
 - Semantic UI
 - Hot Reload (webpack-hot-middleware & react-hot-loader)
 - immutable-assign
 - Node
 - Express
 - Jest (Unit Test)

## Features
 - Modularize Everything
   - Keep everything related as a module staying in one folder. 
   - (component, reducer, action, middleware, style and so on).
   - No need to open multiple folders to change one module.
 - Instantiate Module
   - Assume every module will be reused in the future.
   - Create a reducer instance whenever a it's component is used.
   - No need to manually maintian an array to manage reused component.
 - Decentralised Management Style
   - Management load of route, reducer, middlewares, instance are distributed 
   - to the registrition of the compoenent/module itself.
   - Each module maintain itself for adding and removing, no need to change a centralised place.
 - Flatten Folder Structure
   - Assume every module will be reused in the future.
   - Build flat strucure instead of nested.
   - No common or gloabal concept.
   - More friendly to import.
 - Async Handling
   - Async action is handled by action handler middlewares.
   - Async props is handled by init data wrapper component.

## Future Improvements
 - Complete TS Typings
 - Dependecy Injection
 - React Helmet for SEO
 - Server side rendering for performance
 - Code spliting for performance
 - Request ID and global error handling
 - Producion config and minify & uglify
 - Yaml
 - Cordova
 - Recompose

## Original Boilerplate:
 - Vortigern: https://github.com/barbar/vortigern

## Advisor
 - Paul Li <<paul.li@shroogal.com.au>> - author of 'immutable-assign'.

## To Run
```bash
$ yarn install
$ yarn start
```

## For Uncovered Information
Please ref to [package.json](https://github.com/qk0106/React-prototype/blob/master/package.json)