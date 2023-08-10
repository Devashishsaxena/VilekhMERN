function checkStringCase(s)
{
 return new Promise((resolve,reject)=>{
  if(s>="A" && s<="Z")
   resolve(1);
  else if(s>="a" && s<="z")
   resolve(2);
  else	
   reject(0);   
 });
}

console.log("Before");

var s="-";
checkStringCase(s).then((response)=>{
 if(response==1)
  console.log("Uppercase");
 else
  console.log("Lowercase");  
}).catch((response)=>{
 console.log("Invalid character input");
});

console.log("After");
