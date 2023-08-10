//Asynchronous or Non-Blocking Functions

console.log("Before function execution");

function demo()
{
 console.log("Demo function executed");        
}

var t=setInterval(demo,2000);
//clearInterval(t);

console.log("After function execution");