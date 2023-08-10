//spread operator (...)

var empDetails={"eno":1001,"enm":"Jarvis","esal":10000.67};

//to add new key:value using spread operator
empDetails={...empDetails,"edes":"admin","doj":2004};

//to add new key:value manually
//empDetails["edes"]="admin";
//empDetails["doj"]=2004;

console.log(empDetails);

