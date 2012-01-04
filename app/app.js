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
  App.data = null;
  App.prototype.init = function() {
    App.__super__.init.call(this, "App");
    return this.data = new Data();
  };
  App.prototype.run = function() {
    console.log("Running");
    console.log(this.data.retrieve());
    return this.buildUI();
  };
  App.prototype.buildUI = function() {
    $('#tabs').tabs();
    return $('#sex').buttonset();
  };
  return App;
})();