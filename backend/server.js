const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/kisaanbandhu")
.then(()=>console.log("Database Connected"))
.catch(err=>console.log(err));

app.get("/", (req,res)=>{
res.send("Kisaan Bandhu Backend Running");
});

app.listen(5000,()=>{
console.log("Server running on port 5000");
});

const path = require("path")

app.use(express.static(path.join(__dirname,"../frontend")))

const cors = require("cors")
app.use(cors())


