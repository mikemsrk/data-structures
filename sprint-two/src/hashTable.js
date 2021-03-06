var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  if(this._storage[i] === null || this._storage[i] === undefined){
    this._storage[i] = {};
  }
  this._storage[i][k] = v;
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage[i] === null){
    return null;
  }else{
    return this._storage[i][k];
  }
};

HashTable.prototype.remove = function(k){

  var i = getIndexBelowMaxForKey(k, this._limit);
  delete this._storage[i][k];

  var count = 0;
  for(var key in this._storage[i]){
    count++;
  }
  if(count === 0){
    this._storage[i] = null;
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
