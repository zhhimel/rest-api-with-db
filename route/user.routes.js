const express=require("express");
const { getAllUsers, createUser, deleteUser } = require("../controllers/user.controller");
const routes=express.Router();
routes.get("/",getAllUsers);
routes.post("/",createUser);
routes.delete("/",deleteUser);
module.exports=routes;