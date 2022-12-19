import mongoose from "mongoose";
import { StatusCodes } from "http-status-codes";

// HERE IS SCHEMA OF EMPLOYEE 

 const mainmodelSchema = new mongoose.Schema({

    empId:{type:Number,required:true,unique:true},
    name:{type:String,required:true},
    city:{type:String,required:true},
    gender:{type:String,required:true},
    salary:{type:Number,required:true},
    Doj:{type:String,required:true},
    password:{type:String,required:true}
 })

 // HERE IS MONGOOSE.MODEL FUNCTION OF MONGOOSE WHICH WILL RETURN CLASS WHICH NAME WILL BE 
 // COLLECTION NAME AS WE PASS AS FRIST PARAMETER AND IN SECODN PARAMETER WE PASS SCHEMA 
 
 export  const mainEmployeeModel = mongoose.model("mainDetail",mainmodelSchema)