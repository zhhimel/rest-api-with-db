const config=require("./config");
const mongoose=require("mongoose");
const dbURL=config.db.url;
mongoose.connect(dbURL)
.then(()=>{
    console.log("MongoDB connected");
})
.catch((err)=>{
    console.log("Error");
    process.exit(1);
})