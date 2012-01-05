var App;
var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
  for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor;
  child.__super__ = parent.prototype;
  return child;
};
App = (function() {
  __extends(App, Singleton);
  function App() {
    App.__super__.constructor.apply(this, arguments);
  }
  App.prototype.init = function() {
    App.__super__.init.call(this, "App");
    this.data = new Data();
    return this.ui = new UI();
  };
  App.prototype.run = function() {
    console.log("App.run()");
    this.data.retrieve();
    console.log(this.data);
    return this.ui.build(this.data);
  };
  App.prototype.clearData = function() {
    return this.data.clear();
  };
  App.prototype.setData = function(data) {
    this.data = data;
    return this.data.store();
  };
  App.prototype.getData = function() {
    this.data.retrieve();
    return this.data;
  };
  return App;
})();