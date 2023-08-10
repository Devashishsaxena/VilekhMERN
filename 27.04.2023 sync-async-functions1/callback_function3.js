//Callback function : asynchronous

// console.log("Before function execution");

function demo(a,b,cb)
{
 var c=a+b;   
 console.log("Demo function executed");        
 //cb(c);
 setTimeout(()=>{
    cb(c);
 },2000);
}

var a,b;
a=10;
b=20;
demo(a,b,(result)=>{
 console.log("Demo function callback executed , add="+result);    
});

// console.log("After function execution");



