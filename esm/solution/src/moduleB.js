import * as a from './moduleA.js';
//console.log('Module B loading, what is A: ' + JSON.stringify(a));

const getThisModuleName = function(){
  return this.name;
};

const getModuleAName = function(){
  return a.name;
};

const name = 'moduleBName';

export {
  getThisModuleName,
  getModuleAName,
  name,
}