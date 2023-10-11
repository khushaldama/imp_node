let express = require("express");
let bodyParser = require('body-parser');
let app = express();
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

let todoList = [
    {
        "todoName":"Complete Case Study",
        "todoDescription":"Complete the case study of AWS and NodeJS",
        "todoStatus":"Done"
    },
    {
        "todoName":"Complete Research Paper",
        "todoDescription":"Complete the assignment of GC",
        "todoStatus":"In Progress"
    }
];

app.get("/getTodoList", (req, res) => {
    res.send(todoList);
});

app.post("/addTodo", (req, res) => {
    let todo = req.body.todoName;
    let todo2 = req.body.todoDescription;
    let todo3 = req.body.todoStatus;
    let obj = {
        "todoName":todo,
        "todoDescription":todo2,
        "todoStatus":todo3
    };
    console.log(req.body);
    todoList.push(obj);
    res.send(todoList);
});

app.put("/updateTodo", (req, res) => {
    let todo = req.body;
    let index = todoList.findIndex((item) => item.todoName == todo.todoName);
    todoList[index] = todo;
    res.send(todoList);
});

app.delete("/deleteTodo", (req, res) => {
    let todo = req.body;
    let index = todoList.findIndex((item) => item.todoName == todo.todoName);
    todoList.splice(index, 1);
    res.send(todoList);
});

app.listen(3000);