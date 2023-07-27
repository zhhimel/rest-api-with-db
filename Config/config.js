require("dotenv").config();
const dev={
    app:{
        port: process.env.port||5000
    },
    db:{
        url: process.env.DB_URL||"mongodb://localhost:27017/userDemo"
    }
}
module.exports=dev;