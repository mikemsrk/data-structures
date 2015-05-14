

var Graph = function(){
  this.nodes = [];
};

Graph.prototype.addNode = function(node){
  var newNode = {};
  newNode.value = node;
  newNode.edges = [];

  this.nodes.push(newNode);

};

Graph.prototype.contains = function(node){
  var result = false;

  for (var i = 0; i<this.nodes.length; i++) {
    if (this.nodes[i].value === node){
      result = true;
      break;
    }
  }

  return result;
};

Graph.prototype.removeNode = function(node){
  var result = [];

  for (var i = 0; i<this.nodes.length; i++) {
    if (this.nodes[i].value !== node) {
      result.push(this.nodes[i]);
    }
  }

  this.nodes = result;
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  var result = false;

  for (var i = 0; i<this.nodes.length; i++) {
    if (this.nodes[i].value === fromNode) {
      for (var j = 0; j<this.nodes[i].edges.length; j++) {
        if (this.nodes[i].edges[j] === toNode) {
          result = true;
        }
      }
    }
  }

  return result;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  var found = false;

  for (var i = 0; i<this.nodes.length; i++) {
    if (this.nodes[i].value === toNode) {
      found = true;
    }
  }

  if (found) {
    for (var i = 0; i<this.nodes.length; i++) {
      if (this.nodes[i].value === fromNode) {
        this.nodes[i].edges.push(toNode);
      }
      if (this.nodes[i].value === toNode) {
        this.nodes[i].edges.push(fromNode);
      }
    }
  }

};

Graph.prototype.removeEdge = function(fromNode, toNode){

  for (var i = 0; i<this.nodes.length; i++) {
    var node = this.nodes[i];

    if (node.value === fromNode) {
      var array = [];

      for (var j = 0; j<node.edges.length; j++) {
        if (node.edges[j] !== toNode) {
          array.push(node.edges[j]);
        }
      }

      node.edges = array;
    }

    if (node.value === toNode) {
      var array = [];

      for (var j = 0; j<node.edges.length; j++) {
        if (node.edges[j] !== fromNode) {
          array.push(node.edges[j]);
        }
      }

      node.edges = array;
    }

  }

};

Graph.prototype.forEachNode = function(cb){
  for (var i = 0; i < this.nodes.length; i++) {
    cb(this.nodes[i].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



