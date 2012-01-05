var UI;
var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
UI = (function() {
  function UI() {
    this.data = null;
    this.tabs = $('#tabs');
    this.sex = $('#sex');
    this.age_slider = $('#age_slider');
    this.age_value = $('#age_value');
  }
  UI.prototype.build = function(data) {
    this.data = data;
    this.init_tabs();
    this.init_sex();
    this.init_age();
    this.fill_sex(this.data.sex);
    return this.fill_age(this.data.age);
  };
  UI.prototype.init_tabs = function() {
    return this.tabs.tabs();
  };
  UI.prototype.init_sex = function() {
    return this.sex.buttonset();
  };
  UI.prototype.fill_sex = function(sex) {};
  UI.prototype.init_age = function() {
    this.age_slider.slider({
      min: 1,
      max: 100,
      value: this.data.getAge(),
      slide: __bind(function(event, s) {
        $('#amount').val(s.value);
        this.data.setAge(s.value);
        return this.data.store();
      }, this)
    });
    return $('#amount').val($('#age_slider').slider('value'));
  };
  UI.prototype.fill_age = function(age) {};
  return UI;
})();