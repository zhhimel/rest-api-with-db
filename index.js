const app=require("./app");
const dev=require("./Config/config");
const port=dev.app.port;
app.listen(port,()=>{
    console.log(`Server is running on port http://localhost:${port}`);
});
