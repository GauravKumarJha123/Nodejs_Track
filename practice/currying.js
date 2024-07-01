function multiply(a, b) {
    return a * b;
  }
  
  function curry(fn) {
    return function(a) {
      return function(b) {
        return fn(a, b);
      };
    };
  }
  
  const curriedMultiply = curry(multiply);
  console.log(curriedMultiply(5)(3)); // 15