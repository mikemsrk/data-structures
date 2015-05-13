var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);

  return someInstance;
};

var queueMethods = {
  storageSize:0,
  storage:{},
  enqueue : function(value){
    for(var i = this.storageSize; i > 0; i--){
      this.storage[i] = this.storage[i-1];
    }
    this.storage[0] = value;
    this.storageSize++;
  },
  dequeue : function(){
    var result;
    if(this.storageSize > 0){
      result = this.storage[this.storageSize-1];
      delete this.storage[this.storageSize-1];
      this.storageSize--;
    }
    return result;
  },
  size : function(){
    return this.storageSize;
  }
};

