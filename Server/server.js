const express =require('express')
const app = express()
const port = 8000
const mongoose = require('mongoose')
const cors = require('cors')
const connect=require('./dbConnect')
connect()
app.use(cors())
app.use(express.json())

app.use('/api/user',require('./routes/userRoutes'))
app.use('/api/admin',require('./routes/adminRoutes'))
app.use('/api/cars',require('./routes/carsRoutes'))

app.listen(port)