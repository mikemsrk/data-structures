var BinarySearchTree = function(value){

  var someInstance = {};

  someInstance.value = value;
  someInstance.left = null;
  someInstance.right = null;

  someInstance.insert = function (value) {

    //recursive
    if(value > someInstance.value){
      if(someInstance.right === null){
        someInstance.right = BinarySearchTree(value);
      }else{
        someInstance.right.insert(value);
      }
    }else{
      if(someInstance.left === null){
        someInstance.left = BinarySearchTree(value);
      }else{
        someInstance.left.insert(value);
      }
    }

  };

  someInstance.contains = function (value) {
    if(someInstance.value === value){
      return true;
    }else if(value > someInstance.value){
      if(someInstance.right === null){
        return false;
      }else{
        return someInstance.right.contains(value);
      }
    }else if(value < someInstance.value){
      if(someInstance.left === null){
        return false;
      }else{
        return someInstance.left.contains(value);
      }
    }

  };

  someInstance.depthFirstLog = function (cb) {
    cb(someInstance.value);
    if(someInstance.left !== null){
      someInstance.left.depthFirstLog(cb);
    }
    if(someInstance.right !== null){
      someInstance.right.depthFirstLog(cb);
    }

  };

  return someInstance;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
