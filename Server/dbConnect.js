const mongoose = require('mongoose')
require('dotenv').config()
const connect=()=>{
    mongoose.connect(`mongodb+srv://root:root@cluster0.to44pl9.mongodb.net/Voitures`).then(()=>console.log('connected'))
    .catch(err=>console.log(err))
}

module.exports=connect