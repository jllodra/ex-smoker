var UI;
UI = (function() {
  function UI() {
    this.tabs = $('#tabs');
    this.sex = $('#sex');
    this.age_slider = $('#age_slider');
    this.age_value = $('#age_value');
  }
  UI.prototype.build = function() {
    this.init_tabs();
    this.init_sex();
    return this.init_age();
  };
  UI.prototype.fill = function(data) {
    this.fill_sex(data.sex);
    return this.fill_age(data.age);
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
      value: 19,
      slide: function(event, s) {
        return $('#amount').val(s.value);
      }
    });
    return $('#amount').val($('#age_slider').slider('value'));
  };
  UI.prototype.fill_age = function(age) {};
  return UI;
})();