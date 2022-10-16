import * as a from './moduleA.js';

// in ES modules, this just works, check the /lib folder for the babel output, essentially it's updating the existing object with new properties similar to our commonjs solution.

console.log(a.getModuleBName()); // prints name from moduleB, module B is loaded on the require

console.log(a.getThisModuleName());// prints name from moduleA,
