import express from 'express';
import bodyParser from 'body-parser';
const app = express();

//to link routes at application level
import UserRouter from './routes/userRoutes.js';
import AssignRouter from './routes/assignRoutes.js';
import ProjectRouter from './routes/projectRoutes.js';

//to extract body data from request (POST , PUT , DELETE , PATCH)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//route level middleware
app.use('/user',UserRouter);
app.use('/assign',AssignRouter);
app.use('/project',ProjectRouter);


app.listen(3002);
console.log("server invoked at link http://localhost:3002");
