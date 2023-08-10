//function overloading
//using REST operator

class Add
{
 addData(...args)
 {
    var sum=0;
    for(let x of args)
     sum+=x;
    console.log("Add = "+sum); 
 }   
}

var obj = new Add();
obj.addData();
obj.addData(10);
obj.addData(10,20);
obj.addData(10,20,30);
obj.addData(10,20,30,40);
obj.addData(10,20,30,40,50);