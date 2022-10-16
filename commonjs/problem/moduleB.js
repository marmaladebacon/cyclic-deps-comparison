const a = require('./moduleA.js');
console.log('Module B loading, what is A: ' + JSON.stringify(a));
module.exports = {
  getThisModuleName: function(){
    return this.name;
  },

  getModuleAName: function(){
    return a.name;
  },
  name: 'moduleBName',
}