//async

console.log("Before function execution");

function demo()
{
 return new Promise((resolve,reject)=>{
  resolve("Its working");	        
 }); 
}

var check=async()=>{
 demo().then((result)=>{
  console.log(result);    
 });
}

check();

console.log("After function execution");
