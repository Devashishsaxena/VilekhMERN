import express from 'express';
const app=express();

//to link routers
import IndexRouter from './Routes/index.router.js';
import AdminRouter from './Routes/admin.router.js';

//route level middleware
app.use('/admin',AdminRouter);
app.use('/',IndexRouter);

app.listen(3000);
console.log("server invoked at link http://localhost:3000");