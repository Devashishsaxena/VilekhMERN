//constructor overriding : polymorphism
//Error

class A
{
 constructor()
 {
  console.log("class A , constructor method invoked");
 }   
 aData()
 {
  console.log("Class A , aData method invoked");
 }    
}

class B extends A
{
 constructor()
 {
  console.log("class B , constructor method invoked");
 }   
 bData()
 {
  console.log("Class B , bData method invoked")
 }
}

var obj = new B();
obj.aData();
obj.bData();


