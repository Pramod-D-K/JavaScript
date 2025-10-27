
// function f(){
//     console.log("value of a is", a);
// }
//  var a = 5;
// f();
// // var a = 5;

function fun1(){
    var d1="d1 function or local scope";
    let d4="b4 script scope";

    function fun2(){
        var d2="d2 function or local scope";
        console.log(a1,d1,d2,b1,c1);
    }
    fun2();
    var d5="d5 function or local scope";
}

var a1 = "a1 global scope";
a3 ="a3 global scope";
let b1="b1 script scope";
const c1="c1 script scope";
fun1();

function fun3(){
    console.log(a1,d3);
    {
        var z=10;
    }
    var d3="d3 function or local scope";
}
{
    {
        {
            var x=10;
            var y=10;
        }
    }
    var j1="bolck j1";
    j2="bolck j2";
    let j3="bolck j3";
    const j4="bolck j4";
}
console.log(x);
fun3();
function func4(){
    console.log(a2);
}
func4();
var a2="a2 globle scope";
let b2="b2 script scope";
const c2="c2 script scope";


