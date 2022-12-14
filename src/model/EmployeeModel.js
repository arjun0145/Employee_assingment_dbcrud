import mongoose from "mongoose";
import { StatusCodes } from "http-status-codes";

//   const modelSchema = new mongoose.Schema({
//     empId:{type:Number,required:true,unique:true},
//     name:{type:String,required:true},
//     city:{type:String,required:true},
//     salary:{type:Number,required:true},
//     Doj:{type:String,required:true}
//  })

 const mainmodelSchema = new mongoose.Schema({

    empId:{type:Number,required:true,unique:true},
    name:{type:String,required:true},
    city:{type:String,required:true},
    gender:{type:String,required:true},
    salary:{type:Number,required:true},
    Doj:{type:String,required:true}
 })

 export  const mainEmployeeModel = mongoose.model("mainDetail",mainmodelSchema)