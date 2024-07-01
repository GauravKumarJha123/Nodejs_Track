const arr = new Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20);



let evenElements = [];
let oddElements = [];
arr.forEach(el => {
    if(el % 2 === 0){
      evenElements.push(el);  
    } else {
      oddElements.push(el);
    }
});

console.log("The even elements are: " + evenElements.join(' '));
console.log("The odd elements are: " + oddElements.join(' '));