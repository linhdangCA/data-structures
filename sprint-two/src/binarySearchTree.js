class Node {
  constructor(val) {
    this.right = null;
    this.left = null;
    this.val = val; //val?
  }
}

class BinarySearchTree {
  constructor(val) {
    this.root = new Node(val); //new Node(root)?
  }

  insert(val) {
    var newNode = new Node(val);
    var helper = function(node) {
      if (newNode.value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          helper(node.left);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          helper(node.right);
        }
      }
    };
    helper(this.root);
  }

  contains() {
  }

  depthFirstLog() {
  }
}


/*
 * Complexity: What is the time complexity of the above functions?
 */


