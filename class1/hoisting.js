
let b=20;
const c=30;///need to initialize before access
//they stored in the temporal dead zone and access 
//only after initialize
//
console.log(a);
console.log(b);
console.log(c);
var a=10;
console.log(a);
console.log(b);
console.log(c);


let x=10;
x=200;
console.log(x);
// const y=10;
// y=400;///we cant reinitialize the const variables
// console.log(y);



f1();
console.log(f1);//
var f1=100; //undined in MA
///during CE foo is with reference chanded to 100;
console.log(f1);
function f1(){//during MA it goes top in M and have referece
//of heap in the name of f1 in stack by changed from undefined;
    console.log("foo");
}




console.log("**********");
f2();
function f2(){
    console.log("function");
}
console.log(f2);
var f2=100;
console.log(f2);
