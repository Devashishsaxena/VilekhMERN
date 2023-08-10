//Callback function : synchronous

console.log("Before function execution");

function demo(cb)
{
 console.log("Demo function executed");        
 cb();
}

demo(()=>{
 console.log("Demo function callback executed");    
});

console.log("After function execution");



