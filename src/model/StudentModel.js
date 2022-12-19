import mongoose  from "mongoose";

const StudentSchema = mongoose.Schema({
    roll:{type:Number,required:true},
    name:{type:String,required:true},
    Address:{type:String,required:true},
    marks:{type:Number,required:true},
    dipt:{}



})