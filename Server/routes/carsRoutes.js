const Router=require('express').Router()
const carController = require('../Controllers/carController')
const {isAuth,isAdmin}=require('../middleware/authMiddleware')

//pblic routes
Router.get('/get',carController.get)
//private route
Router.post('/add',isAuth,isAdmin,carController.add)

Router.post('/update',isAuth,isAdmin,carController.update)

Router.post('/deleteht',isAuth,isAdmin,carController.delete)


module.exports=Router