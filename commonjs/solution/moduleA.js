const b = require('./moduleB.js');

module.exports.getThisModuleName = function(){
  return b.getModuleAName();
};

module.exports.getModuleBName = function() {
  return b.getThisModuleName();
};

module.exports.name = 'moduleAName';