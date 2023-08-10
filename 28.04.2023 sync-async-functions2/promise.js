/*WAP to check a number is even or odd using 
promise*/ 

function check(n)
{
 return new Promise((resolve,reject)=>{
    if(n%2==0)
     resolve(1);
    else
     reject(0);     
 }); 
}

var n=103;
console.log("Before execution");

check(n).then((response)=>{
 console.log("Number is even");    
}).catch((response)=>{
 console.log("Number is odd");    
});

console.log("After execution");
