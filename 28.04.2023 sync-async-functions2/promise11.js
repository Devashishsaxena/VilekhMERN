/*WAP to check a number is even or odd using 
promise*/ 

function check(n)
{
 return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(n%2==0)
       resolve(1);
      else
       reject(0);
    },2000); 
 }); 
}

console.log("before");

var n=102;
check(n).then((response)=>{
 console.log("Number is even");    
}).catch((response)=>{
 console.log("Number is odd");    
});

console.log("after");