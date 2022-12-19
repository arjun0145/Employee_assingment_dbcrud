import express from 'express'
import { Adminlogin, SaveAdmin } from '../controller/adminController.js'
const AdminRouter = express.Router()
AdminRouter.post('/saveadmin',SaveAdmin)
AdminRouter.post('/Admin',Adminlogin)

export default AdminRouter; 