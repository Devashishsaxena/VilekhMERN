import express from 'express';
import path from 'path';
import url from 'url';
import bodyParser from 'body-parser';

const app=express();
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

//to link routers
import IndexRouter from './routes/index.router.js';
import AdminRouter from './routes/admin.router.js';

//to configure template engine
app.set("view engine","ejs");
app.set("views","./views");

//to extract body data from request (POST , PUT , DELETE , PATCH)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//to configure static path to load static content : .css , .js , .png.....
const static_path=path.join(__dirname,"public");
app.use(express.static(static_path));


app.set("view engine","ejs");
app.set("views","./views");

//route level middleware
app.use('/admin',AdminRouter);
app.use('/',IndexRouter);

app.listen(3000);
console.log("server invoked at link http://localhost:3000");
