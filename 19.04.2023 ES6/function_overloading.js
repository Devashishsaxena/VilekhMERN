/* It is a kind of polymorphism , that is one entity having different different implementation , if a single function can be used for multiple purpose is considered as function overloading */

//Cannot implement a function with same name : error

function add(a,b)
{
 var res=a+b;    
 console.log("add = "+res);
}

function add(a,b,c)
{
 var res=a+b+c;    
 console.log("add = "+res);
}

add(10,20);
add(10,20,30);