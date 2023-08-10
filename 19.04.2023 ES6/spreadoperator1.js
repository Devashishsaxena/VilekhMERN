//spread operator (...)

var d1={"eno":1001,"enm":"Jarvis","esal":10000.67};
var d2={"edes":"admin","doj":2004};

//to add new key:value using spread operator
var empDetails={...d1,...d2};
console.log(empDetails);

