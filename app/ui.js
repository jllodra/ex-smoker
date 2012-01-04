var UI;
UI = (function() {
  function UI(tabsid, sexid) {
    this.tabsid = tabsid != null ? tabsid : '#tabs';
    this.sexid = sexid != null ? sexid : '#sex';
    this.tabs = $('#tabs');
    this.sex = $('#sex');
  }
  UI.prototype.build = function() {
    this.tabs.tabs();
    return this.sex.buttonset();
  };
  return UI;
})();