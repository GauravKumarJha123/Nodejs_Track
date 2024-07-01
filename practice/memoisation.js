const memoize = (fn) => {
    const cache = {};
    return (...args) => {
      const key = JSON.stringify(args);
      if (!cache[key]) {
        cache[key] = fn.apply(this, args);
      }
      return cache[key];
    };
  };
  
  const add = (...args) => args.reduce((sum, current) => sum + current, 0);

// Create the memoized version of the add function
const memoizedAdd = memoize(add);

// Use the memoized function with an arbitrary number of arguments
console.log(memoizedAdd(1, 2)); // Output: 3
console.log(memoizedAdd(1, 2)); // Output: 3 (from cache)
console.log(memoizedAdd(1, 2, 3, 4, 5)); // Output: 15
console.log(memoizedAdd(1, 2, 3, 4, 5)); // Output: 15 (from cache)
console.log(memoizedAdd(2, 3)); // Output: 5
console.log(memoizedAdd(2, 3)); // Output: 5 (from cache)