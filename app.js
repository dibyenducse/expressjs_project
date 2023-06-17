const express = require('express'); //express return function

const app = express(); // app is a object
//app.use(express.json()); //if client send Application/json data then this funtion can parse the data return object from req.body
//app.use(express.raw()); // to rcv as buffer
app.use(express.text()); // to rcv as buffer

app.listen(3000, () => {
    console.log('listening on port 3000');
});

app.get('/', (req, res) => {
    console.log(req.body);
    res.send('This is home page');
});

app.post('/', (req, res) => {
    res.send('this is home page with Post request.');
});
