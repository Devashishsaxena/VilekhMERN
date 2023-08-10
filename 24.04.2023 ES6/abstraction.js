//abstraction
//getData , addData , showData : method
//a , b , c : data 
//public member

class Add
{
 getData()
 {
  this.a=10;
  this.b=20;
 }   
 addData()
 {
  this.c=this.a+this.b;
 }
 showData()
 {
  console.log("a = "+this.a);
  console.log("b = "+this.b);      
  console.log("add = "+this.c);
 }     
}

var obj = new Add();
obj.getData();
console.log("Before changes");
obj.addData();
obj.showData();


obj.a=0;

console.log("After changes");
obj.addData();
obj.showData();
