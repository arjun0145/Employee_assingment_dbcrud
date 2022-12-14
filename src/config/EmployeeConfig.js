import mongoose, { mongo }  from "mongoose";
import 'dotenv/config'

export async function ConfigureDb()
{

    try {

        // await mongoose.connect('mongodb://localhost:27017/Employee')

        await mongoose.connect(process.env.SERVER_URL)
        console.log("connected to maongodb ")
        
    } catch (error) {

        console.log("problem in connecting to mongodb");
        
    }
 
}