const mongoose=require("mongoose")
const schema=mongoose.Schema;


const listingschema=new schema({
    title:{
    type:String,
    required:true,
    },
    description:String,
    image:{
        type:String,
    }, 
    price:Number,
    location:String,
    country:String
})

const listing =mongoose.model("listing",listingschema)
module.exports=listing;