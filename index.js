import express from 'express'
import 'dotenv/config'
import { ConfigureDb } from './src/config/EmployeeConfig.js'
import EmployeeRouter from './src/router/EmployeeRouter.js'

// here is app constant which is calling express function 
const app = express()

// here is middleware to accept json format 
app.use(express.json())

// here we are calling EmployeeRouter to route our project 
app.use(EmployeeRouter)

// here we are calling ConfigureDb function to connect our server to mongodb
ConfigureDb()



// here port is listining or we are starting server here 
app.listen(process.env.PORT , ()=>{
    console.log("port is running at " + process.env.PORT);
})                                       