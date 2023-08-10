//callback : factorial

console.log("Before function execution");

function calculate(n,cb)
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

async function test(){
 console.log(await calculate(5));
};

test();

console.log("After function execution");