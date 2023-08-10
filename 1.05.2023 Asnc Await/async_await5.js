//callback : factorial

console.log("Before function execution");

function calculate(n)
{
 return new Promise((resolve)=>{
    var f=1;
    while(n>1)
    {
     f*=n;
     n--;     
    }
    resolve(f);
 });   
}

var n=5;
calculate(n).then((result)=>{
 console.log("factorial = "+result);
});

console.log("After function execution");