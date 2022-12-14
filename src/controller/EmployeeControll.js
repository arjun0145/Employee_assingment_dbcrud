
import {  mainEmployeeModel } from "../model/EmployeeModel.js";
import StatusCodes from 'http-status-codes'

 export async function savemainEmployee(req,res){

   

    try {
      
        const Employee = new mainEmployeeModel(req.body)
      
        const  savedEmployee = await Employee.save()
        
        res.status(StatusCodes.CREATED).json(savedEmployee)

    } catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({massage:"try again arjun u can do it "})
    }

}

export async function fetchmainEmployee (req,res){

 try {
    const  Fetchemployee = await mainEmployeeModel.find()
    res.status(StatusCodes.OK).json(Fetchemployee)
    
 } catch (error) {

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({massage:"dont give up bro u can do it , par sach ye hai abhi dikkat hai code me   "})
    
 }
}




