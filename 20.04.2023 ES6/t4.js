import * as m3 from './m3.js';
import d from './m3.js';

console.log("Module imported successfully....");
console.log("a = "+m3.a);
console.log("b = "+m3.b);
console.log("c = "+m3.c);
console.log("d = "+d);

m3.demo();
m3.demo1();

/*
import d,{a,b,c,demo,demo1} from './m3.js';

console.log("Module imported successfully....");
console.log("a = "+a);
console.log("b = "+b);
console.log("c = "+c);
console.log("d = "+d);

demo();
demo1();

*/