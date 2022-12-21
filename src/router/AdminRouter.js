import express from 'express'
import { Adminlogin, SaveAdmin, fetchadmin } from '../controller/adminController.js'
import { verifyToken } from '../middleware/Middleware.js'
const AdminRouter = express.Router()
AdminRouter.post('/saveadmin',SaveAdmin)
AdminRouter.post('/Admin',Adminlogin)
AdminRouter.get('/fetchadmin',verifyToken,fetchadmin)

export default AdminRouter; 