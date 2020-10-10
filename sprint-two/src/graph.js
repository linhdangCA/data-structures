var Graph = function() {
  this.nodes = {};
};

Graph.prototype.addNode = function(newNode) {
  this.nodes[newNode] = {};
  this.nodes[newNode].hasEdgeTo = {};
};

Graph.prototype.contains = function(target) {
  if (this.nodes[target]) {
    return true;
  }
  return false;
};

Graph.prototype.removeNode = function(node) {
  for (var keys in this.nodes[node].hasEdgeTo) {
    this.removeEdge(keys, this.nodes[node].hasEdgeTo);
    this.removeEdge(this.nodes[node].hasEdgeTo, keys);
  }
  delete this.nodes[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.nodes[toNode] === undefined || this.nodes[fromNode] === undefined) {
    return false;
  }
  if (this.nodes[toNode].hasEdgeTo[fromNode] === toNode) {
    return true;
  } else {
    return false;
  }
};

Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.nodes[fromNode] !== undefined && this.nodes[toNode] !== undefined) {
    this.nodes[fromNode].hasEdgeTo[toNode] = fromNode;
    this.nodes[toNode].hasEdgeTo[fromNode] = toNode;
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.nodes[fromNode] !== undefined) {
    this.nodes[fromNode].hasEdgeTo[toNode] = null;
  }
  if (this.nodes[toNode] !== undefined) {
    this.nodes[toNode].hasEdgeTo[fromNode] = null;
  }
};

Graph.prototype.forEachNode = function(cb) {
  for (var nodes in this.nodes) {
    cb(nodes);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addNode - O(1)
 * contains - O(1)
 * removeNode - O(1)
 * hasEdge - O(1)
 * addEdge - O(1)
 * removeEdge - O(1)
 * forEachNode - O(n)
 */
