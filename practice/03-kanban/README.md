# Context
Building an application where all code is written in a single file is (obviously I hope) inadequate (if not read [this](https://medium.freecodecamp.com/javascript-modules-a-beginner-s-guide-783f7d7a5fcc#.ganuff4ku)). In this session we'll be adding a very basic [webpack](https://webpack.js.org/) configuration and split our code into separate files.

# Requirements
- Install [nodejs](https://nodejs.org/en/) - use the latest stable version which at the moment of this writing is 6.9.2

# Scope
- Use npm to add the existing dependencies to your project
- Understand *package.json* file scope and basic structure
- Add dependency to webpack
- Configure webpack in a minimal way to at least:
  - Have an entry point
  - Add ES6 into the mix to be able to use `import` syntax
  - Split existing code in their own files (folder structure doesn't matter for now) and ensure the kanban app still works
