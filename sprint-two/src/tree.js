var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  extend(newTree,treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target){

  var result = false;

  if(target === this.value){
    result = true;
  }else{
    var children = this.children;
    for(var i = 0; i < children.length; i++){
      if(children[i].contains(target)){
        result = true;
      }
    }
  }
  return result;

};


function extend (obj) {
  for (var i = 1; i<arguments.length; i++) {
    for (var key in arguments[i]) {
      obj[key] = arguments[i][key];
    }
  }

  return obj;
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
