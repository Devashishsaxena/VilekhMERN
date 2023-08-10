/*WAP to check a number is even or odd using 
callback*/ 

function check(n,cb)
{
 var status=0;   
 if(n%2==0)
  status=1;
 cb(status); 
}

var n=101;
check(n,(result)=>{
 if(result)
  console.log("Number is even");
 else
  console.log("Number is odd"); 
});
