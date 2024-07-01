const elements = {
    value: 0,
    add(value) {
      this.value += value;
      return this;
    },
    multiply(value) {
      this.value *= value;
      return this;
    },
    divide(value){
        this.value /= value;
        return this;
    }
  };
  
  const result = elements.divide(2).add(10).multiply(5).value; // 50

  console.log(result);