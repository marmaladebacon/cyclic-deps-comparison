import * as b from './moduleB.js';

const getThisModuleName = function(){
  return b.getModuleAName();
};

const getModuleBName = function() {
  return b.getThisModuleName();
};

const name = 'moduleAName';

export {
  getThisModuleName,
  getModuleBName,
  name,
}
