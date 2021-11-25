    /*  variable declaration */
//var x = 5;
// var y = 10;
// var a = "pratik here";
// var z = 5 + 10;
// console.log(x,y,a);
// var x = 2.5;
// console.log(x);
// console.log(y);
// console.log(a);
// console.log(z);
 //var z = x + y;
// var z = x - y;
// var z = x * y;
// var z = x / y;  
//console.log("sum of z= "+z);

/* local and global variable */

var globalscope = "its global scope can access from anywhere after declaration";
console.log(globalscope);

var globalscope1 = "its global scope access from inside funcyion";


function myFunction(){
   var localscope = "local scope variable access on from inside the function";
     console.log(localscope); 
        console.log(globalscope1);
 }
 myFunction();
     console.log(globalscope);
