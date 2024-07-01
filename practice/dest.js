const porp = {name: 'alice' , age : 25, school : 'xyz public school'};

//const {name, age , school} = porp;
// console.log(name);
// console.log(age);
// //console.log(weight);
// console.log(school);

//console.log(` ${porp.name} is the name, ${porp.age} is the age and then ${porp.school} is the school`);

function regularFunction() {
    console.log(this); // `this` refers to the calling context
  }
  const arrowFunction = () => {
    console.log(this); // `this` is inherited from the parent scope
  };
  
 // regularFunction();
  //arrowFunction();

  const original = { a: 1, b: { c: 2 } };
const copy = { ...original };
copy.b.c = 3;
console.log(original.b.c); // 3

