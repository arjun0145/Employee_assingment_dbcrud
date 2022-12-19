import { mainEmployeeModel } from "../model/EmployeeModel.js";
import StatusCodes from "http-status-codes";
import bcrypt from "bcrypt";

export async function savemainEmployee(req, res) {
  try {
    // HERE WE CONVERT DATE STRING TO DATE OBJECT

    const dob = new Date(req.body.Doj);
    req.body.Doj = dob;

    // NOW WE ACCESS PASSWORD FROM REQUEST BODY  AND DATABASE THAN WE DECRYPT USIN BCRYPT LIBRARY
    // AND WE ALSO COMPARE HERE --

    let password = req.body.password;
    const encrypass = bcrypt.hashSync(password, 12);   // WE USE BCRYPT LIBRARY
    req.body.password = encrypass;                     // HERE WE ARE UPDATING OUR STRING TO ENCRYPTED HASH

    // HERE WE ARE GOING TO SAVE OUR DATA

    const Employee = new mainEmployeeModel(req.body);
    const savedEmployee = await Employee.save();
    res.status(StatusCodes.CREATED).json(savedEmployee);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ massage: `try again arjun u can do it ${error} ` });
  }
}


// HERE IS FETCH EMPLOYEE FUNCTION 

export async function fetchmainEmployee(req, res) {
  try {
    const Fetchemployee = await mainEmployeeModel.find(); // FIND() IS INBUILT FUNCTION OF MONGOOSE 
    res.status(StatusCodes.OK).json(Fetchemployee);
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      massage: `dont give up bro u can do it ,
    par sach ye hai abhi dikkat hai code me DATA FETCH NAHI HUA `,
    });
  }
}
