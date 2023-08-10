/* url routing : It is a mechanism to redirect from one application url 
to another */

import http from 'http';

http.createServer((req,res)=>{
 var msg;
    var urlRoute = `<h2>Click on the link below to redirect</h2>
        < a href = '/home' > Home Page</a><br/><br/>
        <a href='/about'>About Page</a><br/><br/>
        <a href='/contact'>Contact Page</a><br/><br/>
        <a href='/service'>Service Page</a><br/><br/>
        <a href='/register'>Register Page</a><br/><br/>
        <a href='/login'>Login Page</a><br/><br/>`;
 if(req.url=="/" || req.url=="/home")
  msg="/ or /home url invoked";
 else if(req.url=="/about")
  msg="/about url invoked";
 else if(req.url=="/contact")
  msg="/contact url invoked";
 else if(req.url=="/service")
  msg="/service url invoked";
 else if(req.url=="/register")
  msg="/register url invoked";
 else if(req.url=="/login")
  msg="/login url invoked";
 else
  msg="invalid url invoked";            
 res.write("<h1>"+msg+"</h1>"+urlRoute); 
 res.end();
}).listen(8081);

console.log("server invoked at link http://localhost:8081");

