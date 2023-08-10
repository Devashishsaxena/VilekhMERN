import express from 'express';
import url from 'url';

const app=express();

const urlRoute="<h2>Click on the link below to redirect</h2><a href='/'>Home Page</a><br/><a href='/about'>About Page</a><br/><a href='/contact'>Contact Page</a><br/><a href='/service'>Service Page</a><br/><a href='/register'>Register Page</a><br/><a href='/login'>Login Page</a><br/>";

app.get("/",(req,res)=>{
 res.send("<h1>/ or /home url invoked</h1>"+urlRoute);
});

app.get("/about",(req,res)=>{
 res.send("<h1>/about url invoked</h1>"+urlRoute);
});

app.get("/contact",(req,res)=>{
 res.send("<h1>/contact url invoked</h1>"+urlRoute);
});

app.get("/service",(req,res)=>{
 res.send("<h1>/service url invoked</h1>"+urlRoute);
});

app.get("/register",(req,res)=>{
 res.send("<h1>/register url invoked</h1>"+urlRoute);
});

app.get("/login",(req,res)=>{
 const urlData=url.parse(req.url,true).query;
 console.log("username : "+urlData.username);
 console.log("password : "+urlData.password);
 console.log("dob : "+urlData.dob); 
 res.send("<h1>/login url invoked</h1>"+urlRoute);
});

app.get("*",(req,res)=>{
 res.send("<h1>Invalid url invoked</h1><a href='/'>Click to redirect to main app</a>");
});

app.listen(3000);
console.log("server invoked at link http://localhost:3000");