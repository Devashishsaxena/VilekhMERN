class Demo
{
 a=10;
 b=20;
 
 aData()
 {
  console.log("Class Demo , aData method invoked");
 }

 bData()
 {
  console.log("Class Demo , bData method invoked");
 }
}

//var obj = new Demo();
//export default obj;

export default new Demo();