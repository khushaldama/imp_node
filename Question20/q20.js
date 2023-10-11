let path = require('path');
let fs = require('fs');
const { json } = require('express');
let express = require('express');
let app = express();

let filePath = path.join(__dirname, 'data.json');
addData();
updateData();
deleteData();
function addData(){
    let data = fs.readFileSync(filePath,"utf-8");
    let jsonData = JSON.parse(data);
    jsonData["employee3"] = {
        name: "Sakshi",
        age: 23,
        salary: 20000
    };
    jsonData = JSON.stringify(jsonData);
    fs.writeFileSync(filePath, jsonData);
}

function updateData(){
    let data = fs.readFileSync(filePath,"utf-8");
    let jsonData = JSON.parse(data);
    jsonData["employee3"]["age"] = 22;
    jsonData = JSON.stringify(jsonData);
    fs.writeFileSync(filePath, jsonData);
}

function deleteData(){
    let data = fs.readFileSync(filePath,"utf-8");
    let jsonData = JSON.parse(data);
    delete jsonData["employee3"];
    jsonData = JSON.stringify(jsonData);
    fs.writeFileSync(filePath, jsonData);
}
