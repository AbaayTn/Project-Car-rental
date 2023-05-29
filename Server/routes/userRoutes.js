const Router=require('express').Router()
const userController=require('../Controllers/userController')
const {isAuth}=require('../middleware/authMiddleware')

//public routes
Router.post('/register',userController.register)
Router.post('/login',userController.login)
//private route
Router.get('/cars',isAuth,userController.me)


module.exports=Router