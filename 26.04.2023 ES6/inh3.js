//overriding : polymorphism
//problem solution

class A
{
 Data()
 {
  console.log("Class A , Data method invoked");
 }   
 aData()
 {
  console.log("Class A , aData method invoked");
 }    
}

class B extends A
{
 Data()
 {
  super.Data();   
  console.log("Class B , Data method invoked");
 }   
 bData()
 {
  console.log("Class B , bData method invoked")
 }
}

var obj = new B();
obj.Data();
obj.aData();
obj.bData();


