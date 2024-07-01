const array = [10, 20, 30, 40];

for (const val of array) {
  console.log(val); // Will log 10, 20, 30, 40
}

for (const idx in array) {
  console.log(idx); // Will log 0, 1, 2, 3 (the property names/indexes)
}

function introduce(greeting) {
    console.log(greeting + ', my name is ' + this.name);
  }
  
  const user = { name: 'Bob' };
  
  introduce.call(user, 'Hi');  // "Hi, my name is Bob"
  introduce.apply(user, ['Hello' , 'there', 'how are you']); // "Hello, my name is Bob"