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
      this.age = 30;
    }
  }
  Data.prototype.store = function() {
    var randomAge;
    console.log("Storing data");
    randomAge = Math.random();
    localStorage.setItem('age', randomAge);
    return randomAge;
  };
  Data.prototype.retrieve = function() {
    return this.age = localStorage.getItem('age');
  };
  return Data;
})();