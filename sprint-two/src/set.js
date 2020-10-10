var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = null; // fix me // collection
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // use the item as the key and the value
  // add to the set._storage collection
};

setPrototype.contains = function(item) {
  // if the value at the collection using item as the key
  // return false
  // else
  // return true
};

setPrototype.remove = function(item) {
  // if item is in the set
  // remove item at the given item location
  // else
  // return undefined
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
