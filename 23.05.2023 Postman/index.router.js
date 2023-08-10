import express from 'express';
import url from 'url';

const router=express.Router();

router.get("/",(req,res)=>{
 res.render("home"); 
});

router.get("/about",(req,res)=>{
 res.render("about");
});

router.get("/contact",(req,res)=>{
 res.render("contact");
});

router.get("/service",(req,res)=>{
 res.render("service");
});

router.get("/register",(req,res)=>{
 res.render("register");
});

router.get("/login",(req,res)=>{
 res.render("login");
});

//url to test http methods( /test )

//to proccess POST request
/*
router.post("/test",(req,res)=>{
 //to proccess body data
 var urlData=req.body;
 //console.log(urlData);
 console.log("Username = "+urlData.unm);
 console.log("Password = "+urlData.upass); 
 res.send("<h1>Request proccessed successfully , /test url & method POST (params)</h1>");
});*/

//to proccess PATCH request

router.patch("/test",(req,res)=>{
 //to proccess body data
 var urlData=req.body;
 //console.log(urlData);
 console.log("Condition = "+urlData.condition_data);
 console.log("Data = "+urlData.set_data); 
 res.send("<h1>Request proccessed successfully , /test url & method PATCH</h1>");
})

//to proccess DELETE request

/*router.delete("/test",(req,res)=>{
 //to proccess body data
 var urlData=req.body;
 console.log(urlData);
 console.log("Username = "+urlData.username);
 console.log("Password = "+urlData.password); 
 res.send("<h1>Request proccessed successfully , /test url & method DELETE</h1>");
});*/

//to proccess GET request

/*router.get("/test/:unm/:upass",(req,res)=>{
 //to proccess query params
 var urlData=req.params;
 console.log("Username = "+urlData.unm);
 console.log("Password = "+urlData.upass); 
 res.send("<h1>Request proccessed successfully , /test url & method GET (params)</h1>");
});*/

/*
router.get("/test",(req,res)=>{
 //to proccess query string
 var urlData=url.parse(req.url,true).query;
 console.log("Username = "+urlData.username);
 console.log("Password = "+urlData.password); 
 res.send("<h1>Request proccessed successfully , /test url & method GET</h1>");
});
*/

//for all anonymous path & methods
router.all("*",(req,res)=>{
 res.render("pnf");
});

export default router;
