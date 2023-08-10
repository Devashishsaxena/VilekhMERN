import express from 'express';
const app=express();

//application level middleware specific routes

app.use("/about",(req,res,next)=>{
 console.log("application level middleware invoked");    
 next();
});

//application level middleware all routes

/*app.use((req,res,next)=>{
 console.log("application level middleware invoked");    
 next();
});*/

/*app.use("/",(req,res,next)=>{
 console.log("application level middleware invoked");    
 next();
});*/

app.get("/",(req,res)=>{
 res.send("<h1>/ or /home url invoked</h1>");
});

app.get("/about",(req,res)=>{
 res.send("<h1>/about url invoked</h1>");
});

app.listen(3000);
console.log("server invoked at link http://localhost:3000");