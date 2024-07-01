// function abc(){
//     console.log("Hi this is abc");
// }

var abc = () => {
    console.log("Hi this is an arrow function");
}
function abc(){
    console.log("Hi this is abc");
}

var x = y => {
    console.log(`y value is ${y}`);
}

function y(x = 3){
    console.log(`value of x is ${x}`);
}

x(3);
y(5);

abc();