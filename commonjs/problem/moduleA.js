const b = require('./moduleB.js');

module.exports = {
  getThisModuleName: function(){
    return b.getModuleAName();
  },

  getModuleBName: function() {
    return b.getThisModuleName();
  },
  name: 'moduleAName',
}