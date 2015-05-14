var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storageSize:0,
    storage:{}
  };

  extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  for (var i = this.storageSize; i>0; i--){
    this.storage[i]=this.storage[i-1];
  }

  this.storage[0] = value;
  this.storageSize++;
};

queueMethods.dequeue = function () {
  var result;

  if (this.storageSize > 0) {
    result = this.storage[this.storageSize-1];
    delete this.storage[this.storageSize-1];
    this.storageSize--;
  }

  return result;
};

queueMethods.size = function () {
  return this.storageSize;
};

function extend (obj) {
  for (var i = 1; i<arguments.length; i++) {
    for (var key in arguments[i]) {
      obj[key] = arguments[i][key];
    }
  }

  return obj;
}


