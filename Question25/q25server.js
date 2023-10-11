let express = require("express");
let app = express();
let mongo = require("mongoose");
mongo.connect('mongodb://localhost:27017/tasks');
let mconnect = mongo.connection;

let schema = mongo.Schema({
    task: String,
    status: Boolean 
});
const task = mongo.model('task', schema, "list");  
app.use(express.json());
app.use(express.static(__dirname));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/q25.html");
});

app.get("/api/getTaskData", function(req, res) {
    task.find().then((data)=>{res.json(data)});
});

app.post("/api/addTask", function(req, res) {
    let dt = req.body;
    task.create({task:dt.task,status:dt.status}).then((data)=>{res.json(data)});
});

app.put("/api/updateTask/:id", function(req, res) {
    let dt = req.body;
    console.log(dt);
    console.log(req.params.id);
    task.updateOne({_id:req.params.id},{task:dt.task,status:dt.status}).then((data)=>{res.json(data)});
});

app.delete("/api/deleteTask/:id", function(req, res) {
    let id = req.params.id;
    console.log(id);
    task.deleteOne({_id:id}).then((data)=>{res.json(data)});
});

app.listen(3000);