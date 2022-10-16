const a = require('./moduleA.js');

console.log(a.getModuleBName()); // prints module B, module B is loaded on the require

console.log(a.getThisModuleName());// prints undefined, because when module B is loaded it receives an empty object from the module A import, which is essentially an empty object because it is the initial value of the exported object since A has not done loading since we do
// const b = require('./moduleB.js')
// then
// module.exports = { ... defined here ...}
// when A is done loading, the new exported object from A is disconnected from the initial empty object that B has imported
