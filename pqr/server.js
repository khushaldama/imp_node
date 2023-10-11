const express = require("express")
const app = express()
const mongooes = require("mongoose")
mongooes.connect("mongodb://127.0.0.1:27017/xyz")
app.use(express.json());
app.use(express.static(__dirname));

let schema = mongooes.Schema({
    Name: String,
    age: Number
});
const task = mongooes.model('task', schema, "table_xyz");
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html")
})
app.get("/api/getTaskData", function (req, res) {
    task.find().then((data) => { res.json(data) });
})
app.post("/api/addTask", function(req, res) {
    let dt = req.body;
    task.create({Name:dt.Name,age:dt.age}).then((data)=>{res.json(data)});
});
app.put("/api/updateTask/:id", function(req, res) {
    let dt = req.body;
    console.log(dt);
    console.log(req.params.id);
    task.updateOne({_id:req.params.id},{Name:dt.Name,age:dt.age}).then((data)=>{res.json(data)});
});

app.delete("/api/deleteTask/:id", function(req, res) {
    let id = req.params.id;
    console.log(id);
    task.deleteOne({_id:id}).then((data)=>{res.json(data)});
});
app.listen(3000, function () {
    console.log("server is runing")
})

