//abstraction
//getData , addData , showData : method
//#a , #b , #c : private data member 

class Add
{
 #a=0;
 #b=0;   
 #c=0;
 getData()
 {
  this.#a=10;
  this.#b=20;
 }   
 addData()
 {
  this.#c=this.#a+this.#b;
 }
 showData()
 {
  console.log("a = "+this.#a);
  console.log("b = "+this.#b);      
  console.log("add = "+this.#c);
 }     
}

var obj = new Add();
obj.getData();
obj.addData();
obj.showData();

//Error
//console.log(obj.#a);
//obj.#a=1000;