const a = require('./moduleA.js');

console.log(a.getModuleBName()); // prints name from moduleB, module B is loaded on the require

console.log(a.getThisModuleName());// prints name from moduleA, because we are not disconnecting the original object, instead definining the properties on the existing object.
