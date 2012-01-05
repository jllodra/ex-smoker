var Data;
Data = (function() {
  function Data(sex, age) {
    var _ref, _ref2;
    this.sex = sex;
    this.age = age;
    if ((_ref = this.sex) == null) {
      this.sex = "Male";
    }
    if ((_ref2 = this.age) == null) {
      this.age = "30";
    }
  }
  Data.prototype.getSex = function() {
    return this.sex;
  };
  Data.prototype.setSex = function(sex) {
    return this.sex = sex;
  };
  Data.prototype.getAge = function() {
    return this.age;
  };
  Data.prototype.setAge = function(age) {
    return this.age = age;
  };
  Data.prototype.store = function() {
    localStorage.setItem('sex', this.sex);
    return localStorage.setItem('age', this.age);
  };
  Data.prototype.clear = function() {
    return localStorage.clear();
  };
  Data.prototype.retrieve = function() {
    if (localStorage.getItem('sex') != null) {
      this.sex = localStorage.getItem('sex');
    }
    if (localStorage.getItem('age') != null) {
      return this.age = localStorage.getItem('age');
    }
  };
  return Data;
})();