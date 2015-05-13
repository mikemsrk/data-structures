var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = new Node(value);

    if (list.tail !== null){
      list.tail.next = node;
    }

    list.tail = node;

    if (list.head === null) {
      list.head = list.tail;
    }

  };

  list.removeHead = function(){
    var result = list.head.value;

    list.head = list.head.next;

    return result;
  };

  list.contains = function(target){
    var result = false;

    var element = list.head;

    while (element !== null) {
      if (element.value === target) {
        result = true;
        break;
      }

      element = element.next;
    }

    return result;

  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
