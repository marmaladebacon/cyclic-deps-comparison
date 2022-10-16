const a = require('./moduleA.js');
console.log('Module B loading, what is A: ' + JSON.stringify(a));
module.exports.getThisModuleName = function(){
  return this.name;
};

module.exports.getModuleAName = function(){
  return a.name;
};

module.exports.name = 'moduleBName';