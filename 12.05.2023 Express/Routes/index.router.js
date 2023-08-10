import express from 'express';
import url from 'url'

const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.static("public"));
console.log()
router.post("/", (req, res) => {
   res.send(req.body.user + req.body.Password)
});
// router.get("/",(req,res)=>{
//  res.send("<h1>/ or /home url invoked , visitor router</h1>");
// });

// router.get("/about", (req, res) => {
//     // var data=req.body
//    var data=url.parse(req.url,true).query
//     // res.send("<h1>/about url invoked , visitor router</h1>");
//     res.send(data);
// });


router.get("/contact",(req,res)=>{
 res.send("<h1>/contact url invoked , visitor router</h1>");
});

router.get("/service",(req,res)=>{
 res.send("<h1>/service url invoked , visitor router</h1>");
});

router.get("/register",(req,res)=>{
 res.send("<h1>/register url invoked , visitor router</h1>");
});

router.get("/login",(req,res)=>{
 res.send("<h1>/login url invoked , visitor router</h1>");
});

export default router;