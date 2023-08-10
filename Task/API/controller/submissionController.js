import '../models/connection.js';
import SubmissionSchemaModel from '../models/submissionModel.js';
import url from 'url';

export const save= async(req, res, next)=>{
  var submissionList = await SubmissionSchemaModel.find().sort({"_id" : -1});
  var _id = (submissionList.length== 0 ? 1 : taskList[0]._id+1);
  var submissionDetails={...req.body,"_id":_id,"info":Date()};
  var submission=await SubmissionSchemaModel.create(submissionDetails);
  if(submission)
   return res.status(201).json({"status":true});
  else
   return res.status(500).json({"status": false});
}

export const fetch=async (req,res)=>{
    var condition_object=url.parse(req.url,true).query;
    var submissionList = await SubmissionSchemaModel.find(condition_object);
    var l= submissionList.length;
    if(l!=0)
      return res.status(201).json(submissionList);
    else
      return res.status(500).json({"result": "Server Error"});
  }
  
  export const sdelete=async(req,res)=>{
    var condition_obj=JSON.parse(req.body.condition_obj);          
    var submission = await SubmissionSchemaModel.find(condition_obj);
    if(submission.length!=0)
    {
      let result = await SubmissionSchemaModel.deleteMany(condition_obj); 
      if(result)
       return res.status(201).json({"msg":"record deleted successfully...."});
      else
       return res.status(500).json({error: "Server Error"});
    }
    else
      return res.status(404).json({error: "Resource not found"}); 
  }
  
  
  export const update=async(req,res,next)=>{
    let submissionDetails = await SubmissionSchemaModel.findOne(JSON.parse(req.body.condition_obj));
    if(submissionDetails){
       let submission=await SubmissionSchemaModel.updateOne(JSON.parse(req.body.condition_obj),{$set: JSON.parse(req.body.content_obj)});   
       if(submission)
        return res.status(201).json({"msg":"record updated successfully"});
       else
        return res.status(500).json({error: "Server Error"});
    }
    else
     return res.status(404).json({error: "Requested resource not available"});
  }
  
