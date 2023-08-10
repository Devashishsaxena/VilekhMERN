//Asynchronous or Non-Blocking Functions

console.log("Before function execution");

function demo()
{
 console.log("Demo function executed");        
}

setTimeout(demo,2000);

console.log("After function execution");