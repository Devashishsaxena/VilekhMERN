/* url parsing */

import http from 'http';
import url from 'url';

http.createServer((req,res)=>{
 var urlobj=url.parse(req.url,true);
 //console.log(urlobj);   
 var msg;
    var urlRoute = `<h2>Click on the link below to redirect
    </h2><a href='/home'>Home Page</a><br/><br/>
    <a href='/about'>About Page</a><br/><br/>
    <a href='/contact'>Contact Page</a><br/><br/>
    <a href='/service'>Service Page</a><br/><br/>
    <a href='/register'>Register Page</a><br/><br/>
    <a href='/login'>Login Page</a><br/><br/>`;
 if(urlobj.pathname=="/" || urlobj.pathname=="/home")
  msg="<h1>/ or /home url invoked</h1>";
 else if(urlobj.pathname=="/about")
  msg="<h1>/about url invoked</h1>";
 else if(urlobj.pathname=="/contact/check")
  msg="<h1>/contact url invoked</h1>";
 else if(urlobj.pathname=="/service")
  msg="<h1>/service url invoked</h1>";
 else if(urlobj.pathname=="/register")
  msg="<h1>/register url invoked</h1>";
 else if(urlobj.pathname=="/login")
 {
  let username=urlobj.query.username;
  let password=urlobj.query.password;   
  console.log("Username = "+username);
  console.log("Password = "+password);   
  msg="<h1>/login url invoked</h1>";
 }
 else
  msg="<h1>invalid url invoked</h1>";            
 res.write(msg+urlRoute); 
 res.end();
}).listen(8081);

console.log("server invoked at link http://localhost:8081");

