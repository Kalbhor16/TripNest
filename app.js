
const express=require("express")
const app=express()
const Listing=require("./models/listing.js")
const methodOverride=require("method-override")
const mongoose=require("mongoose")
const path=require("path");
//npm i ejs-mate
const ejsMate=require("ejs-mate")

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"/public")))
app.use(methodOverride("_method"))
app.engine("ejs",ejsMate)

main()
.then(()=>{
    console.log("connection is successful")
}) 
.catch((err)=>{
    console.log(err);
})                
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/norman")
}
//index route
app.get("/listing",async(req,res)=>{
   const allListings=await Listing.find({});
   res.render("listings/index.ejs",{allListings})
})
//new route
app.get("/listing/new",(req,res)=>{
    res.render("listings/new.ejs")
})

//cerate route
app.post("/listing",async(req,res)=>{
    let{title,description,image,price,country,location}=req.body;
    let newlisting=new Listing({
        title:title,
        description:description,
        image:image,
        price:price,
        location:location,
        country:country     
    })
     await newlisting.save();
    res.redirect("/listing");
})
//show route
app.get("/listing/:id",async(req,res)=>{
    let{id}=req.params;
    const listing=await Listing.findById(id);
    res.render("listings/show.ejs",{listing})
})
//edit route
app.get("/listing/:id/edit",async(req,res)=>{
     let{id}=req.params;
    const listing=await Listing.findById(id);
    res.render("listings/edit.ejs",{listing})
})
//update route
app.put("/listing/:id",async(req,res)=>{
    let{id}=req.params;
    let {listing:newlisting}=req.body;
    console.log(newlisting)
    let updateListing= await Listing.findByIdAndUpdate(id,newlisting,{runValidators:true,new:true})
    console.log(updateListing)
     res.redirect("/listing");
})
//
app.delete("/listing/:id",async(req,res)=>{
    let {id}=req.params;
    let deleteListing=await Listing.findByIdAndDelete(id);
    console.log(deleteListing);
    res.redirect("/listing")
})
/*
app.get("/testlisting",async(req,res)=>{
    let samplelisting= new Listing({
        title:"My New Villa",
        description:"By the beach",
        price:234523,
        location:"Mumbai",
        country:"India",

    })
    await samplelisting.save();
    console.log("sample was saved")   
    res.send("successful testing") 
})
*/


app.listen(8000,()=>{
    console.log("server is listening to port 8000")
})