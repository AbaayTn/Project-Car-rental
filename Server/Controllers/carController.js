const Cars =require ('../models/carsSchema')
const carController={
get:async (req,res)=>{
const cars=await Cars.find()
res.send(cars)

},
add:async (req,res)=>{ 
const{name,description,rate,price,image}=req.body
const car=await Cars.create({name,description,rate,price,image})
res.status(200).json({status:'success',body:car})
},



update:async (req,res)=>{
    const { name, newname, newdescription, newrate, newprice, newimage } = req.body;
    await Cars.updateOne({name:req.body.name},{ $set: { name: newname,description: newdescription, rate: newrate, price:newprice,image:newimage } })
    res.send("car updated")
    },



    
delete:async(req,res)=>{
        const test=await Cars.deleteOne({name:req.body.name})
        if (test.deletedCount>0)
        res.send('car deleted')
        else
        res.send("erreur")
    }

}
module.exports=carController