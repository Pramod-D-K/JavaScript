
//primitive datatypes
var string = "Pramod D K";
var string1 = 'Pramod';
var string2=`pramod`;

string1[0]="B";//immutable

console.log(string);
console.log(string1);
console.log(string2);

var num1=326576;
var num2=3.2545;
console.log(num1);

var boolean= true;
console.log(boolean);

var undefined;
console.log(undefined);

var n=null;
console.log(n);

var symb= Symbol("id");
console.log(symb);

//defining the datatype in js
//all are valid
a=10;
var b=20;
let c=30;
const d=40;

console.log(a,b,c,d);


//non primitive datatypes
var person={
    name:"Pramod",
    age:25
};
//this also valid
person2={
    name:"RAM",
    age:26
}
console.log(person);
person.name="PRAMOD D K";
console.log(person);
console.log(person2);

var arr=[1,2,3,4];
console.log(arr);
arr[0]=10;
console.log(arr);


function greet(){
    console.log("Hello");
}
greet();

