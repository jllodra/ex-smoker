var Singleton;
Singleton = (function() {
  var instance;
  function Singleton() {}
  instance = null;
  Singleton.get = function() {
    if (!(instance != null)) {
      instance = new this;
      instance.init();
    }
    return instance;
  };
  Singleton.prototype.init = function(name) {
    if (name == null) {
      name = "unknown";
    }
    return console.log("" + name + " initialized");
  };
  return Singleton;
})();