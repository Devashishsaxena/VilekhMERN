//Callback function : asynchronous

console.log("Before function execution");

function demo(cb)
{
 console.log("Demo function executed");        
 setTimeout(cb,2000);
}

demo(()=>{
 console.log("Demo function callback executed");    
});

console.log("After function execution");



