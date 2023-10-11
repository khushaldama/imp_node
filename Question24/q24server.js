let express = require("express");
let mongodb = require("mongodb");
let app = express();
const client = new mongodb.MongoClient('mongodb://localhost:27017');

app.use(express.static(__dirname));
app.use(express.json());

client.connect(function(err, db) {
  if (err) {
    console.log(err);
    return;
  } 
  console.log("Its been working fine");
//   client.close();
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/q24.html');
}); 

app.get("/getTasks", async (req, res) => {
    const db = await client.db('tasks');
    const coll = await db.collection('list');
    let tasks = await coll.find({}).toArray();;
    res.json(tasks);
});

app.listen(3000);