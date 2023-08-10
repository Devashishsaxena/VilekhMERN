function checkPalindrome(n)
{
 var d1,d2,flag=0;
 d1=parseInt(n/100);
 d2=n%10;
 if(d1==d2)
  flag=1
 return flag;
}

var printReverse=function(n){
 var rev_n;
 d1=parseInt(n/100);
 d2=parseInt(n/10)%10;
 d3=n%10;
 rev_n=d1+d2*10+d3*100;
 console.log("Reverse number = "+rev_n);
}

var printAverage=(n)=>{
 var avg_n;
 d1=parseInt(n/100);
 d2=parseInt(n/10)%10;
 d3=n%10;
 avg_n=(d1+d2+d3)/3;
 console.log("Average number = "+avg_n);
}

var a=151,res;
res=checkPalindrome(a);
if(res)
 printReverse(a)
else
 printAverage(a)


