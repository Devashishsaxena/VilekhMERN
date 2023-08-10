//Asynchronous or Non-Blocking Functions

console.log("Before function execution");

function demo()
{
 console.log("Demo function executed");        
}

var t=setTimeout(demo,2000);

clearTimeout(t);

console.log("After function execution");