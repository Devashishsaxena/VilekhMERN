import express from 'express';
import bodyParser from 'body-parser';
const app = express();

//to link routes at application level
import UserRouter from './routes/userRouter.js';
import ProjectRouter from './routes/projectRouter.js';
import GroupRouter from './routes/groupRouter.js';
import AssignRouter from './routes/assignRouter.js';
import TaskRouter from './routes/taskRouter.js';
import SubmissionRouter from './routes/submissionRouter.js';

//to extract body data from request (POST , PUT , DELETE , PATCH)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//route level middleware
app.use('/user',UserRouter);
app.use('/project',ProjectRouter);
app.use('/group',GroupRouter);
app.use('/assign',AssignRouter);
app.use('/task',TaskRouter);
app.use('/submission',SubmissionRouter);

app.listen(3001);
console.log("server invoked at link http://localhost:3001");
