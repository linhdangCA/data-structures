var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[length] = value;
    length++;
    return length;
  };

  someInstance.pop = function() {
    if (length === 0) {
      return undefined;
    }
    var out = storage[length - 1];
    delete storage[length - 1];
    length--;
    return out;
  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};
