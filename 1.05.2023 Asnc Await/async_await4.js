//callback : factorial

console.log("Before function execution");

function calculate(n,cb)
{
 var f=1;
 while(n>1)
 {
  f*=n;
  n--;     
 }
 setTimeout(()=>{
  cb(f);
 },2000);
}

var n=5;
calculate(n,(result)=>{
 console.log("factorial = "+result);
});

console.log("After function execution");