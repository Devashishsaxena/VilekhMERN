//Paramatrised constructor

class Add
{
 constructor(a,b)
 {
  this.a=a;
  this.b=b;        
 }   
 getData(a,b)
 {
  this.a=a;
  this.b=b;
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

var obj = new Add(0,0);

obj.addData();
obj.showData();

obj.getData(100,200);
obj.addData();
obj.showData();



