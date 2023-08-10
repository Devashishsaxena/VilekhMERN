export function getFactorial(n)
{
 var f=1;
 while(n>1)
 {
  f*=n;    
  n--; 
 }
 return f; 
};

export function printTable(n)
{
 for(let i=1;i<=10;i++)
  console.log(n+"*"+i+"="+(n*i));  
};