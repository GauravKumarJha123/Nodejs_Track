const module = {
    x: 42,
    getX: function() {
      return this.x;
    }
  };
  
  const retrieveX = module.getX.bind(module);
  console.log(retrieveX()); 