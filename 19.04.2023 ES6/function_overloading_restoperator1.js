//function overloading
//rest operator

function add(...args)
{
 var s=0;
 for(let x of args)
  s+=x;    
 console.log("Add = "+s); 
}

add();
add(10);
add(10,20);
add(10,20,30);
add(10,20,30,40);
add(10,20,30,40,50);
add(10,20,30,40,50,60,70,80,90,100);
