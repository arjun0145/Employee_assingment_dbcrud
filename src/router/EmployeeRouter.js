import  express  from "express";
import {  fetchmainEmployee, savemainEmployee } from "../controller/EmployeeControll.js";

const EmployeeRouter = express.Router()

EmployeeRouter.post('/saveEmployee',savemainEmployee)
EmployeeRouter.get('/getallEmployee',fetchmainEmployee)


export default EmployeeRouter; 