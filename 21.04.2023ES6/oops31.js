//local member

class Add
{
 getData()
 {
  var a,b;
  a=10;
  b=20;
 }   
 addData()
 {
  var c=a+b;
 }
 showData()
 {
  console.log("a = "+a);
  console.log("b = "+b);      
  console.log("add = "+c);
 }     
}

var obj = new Add();
obj.getData();
obj.addData();
obj.showData();
