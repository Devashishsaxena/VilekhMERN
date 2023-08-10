//overriding : polymorphism
/*In case of inheritance , base class property & behaviour is inherited by 
derived class. It is possible that both base & derived 
contain data or functionality with same name , in this case derived 
class will override data or functionality of base class.*/ 

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


