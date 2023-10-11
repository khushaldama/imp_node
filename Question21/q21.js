let express = require('express');
let app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/q21.html');
});

app.listen(3000);