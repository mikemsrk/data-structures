var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {storageSize: 0,
    storage: {}};

  extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function (value) {
  this.storage[this.storageSize] = value;
  this.storageSize++;
};

stackMethods.pop = function () {
  var result;

  if (this.storageSize > 0) {
    result = this.storage[this.storageSize-1];
    delete this.storage[this.storageSize-1];
    this.storageSize--;
  }

  return result;

}

stackMethods.size = function () {
  return this.storageSize;
}

function extend (obj) {
  for (var i = 1; i<arguments.length; i++) {
    for (var key in arguments[i]) {
      obj[key] = arguments[i][key];
    }
  }

  return obj;
}

