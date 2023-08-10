import '../models/connection.js';
import TaskSchemaModel from '../models/taskModel.js';
import url from 'url';

export const save= async(req, res, next)=>{
  var taskList = await TaskSchemaModel.find().sort({"_id" : -1});
  var _id = (taskList.length== 0 ? 1 : taskList[0]._id+1);
  var taskDetails={...req.body,"_id":_id};
  var task=await TaskSchemaModel.create(taskDetails);
  if(task)
   return res.status(201).json({"status":true});
  else
   return res.status(500).json({"status": false});
}

export const fetch=async (req,res)=>{
    var condition_object=url.parse(req.url,true).query;
    var taskList = await TaskSchemaModel.find(condition_object);
    var l= taskList.length;
    if(l!=0)
      return res.status(201).json(taskList);
    else
      return res.status(500).json({"result": "Server Error"});
  }
  
  export const deleteTask=async(req,res)=>{
    var condition_obj=JSON.parse(req.body.condition_obj);          
    var task = await TaskSchemaModel.find(condition_obj);
    if(task.length!=0)
    {
      let result = await TaskSchemaModel.deleteMany(condition_obj); 
      if(result)
       return res.status(201).json({"msg":"record deleted successfully...."});
      else
       return res.status(500).json({error: "Server Error"});
    }
    else
      return res.status(404).json({error: "Resource not found"}); 
  }
  
  
  export const updateTask=async(req,res,next)=>{
    let taskDetails = await TaskSchemaModel.findOne(JSON.parse(req.body.condition_obj));
    if(taskDetails){
       let task=await TaskSchemaModel.updateOne(JSON.parse(req.body.condition_obj),{$set: JSON.parse(req.body.content_obj)});   
       if(task)
        return res.status(201).json({"msg":"record updated successfully"});
       else
        return res.status(500).json({error: "Server Error"});
    }
    else
     return res.status(404).json({error: "Requested resource not available"});
  }
  
