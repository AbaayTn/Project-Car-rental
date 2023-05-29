const mongoose=require('mongoose')
const carSchema=mongoose.Schema({
    name:{type:String, required:true},
    description:{type:String, required:true},
    rate:{type:Number, required:true},
    price:{type:Number, required:true},
    image:{type:String, require:true},
},
{timestamps:true})

const Cars=mongoose.model('cars',carSchema)
module.exports=Cars