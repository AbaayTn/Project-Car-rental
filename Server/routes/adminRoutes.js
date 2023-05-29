const adminController = require('../Controllers/adminController')
const { isAuth, isAdmin } = require('../middleware/authMiddleware')

const Router=require('express').Router()



//public routes
Router.post('/login',adminController.login)
//private route
Router.get('/cars',isAuth,adminController.me)
Router.post('/deleteuser',isAuth,isAdmin,adminController.delete)

module.exports=Router