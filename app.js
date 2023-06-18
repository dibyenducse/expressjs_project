const express = require('express'); //express return function

const app = express(); // app is a object
//app.use(express.json()); //if client send Application/json data then this funtion can parse the data return object from req.body
//app.use(express.raw()); // to rcv as buffer(if add toString() for getting string format)
//app.use(express.text()); // to rcv as text
//app.use(express.urlencoded()); // tp rcv encoded data

// app.use(
//     express.static(`${__dirname} + /public/`, {
//         index: 'home.html',
//     })
// ); //to make the folder direct accesible by url

app.set('view engine', 'ejs');

app.use(
    express.static(__dirname + '/public/', {
        index: 'home.html',
    })
); //to make the folder direct accesible by url

app.route('/about/mission') //for combinning single url with different method
    .get((req, res) => {
        res.send('welcome to application home get');
    })
    .put((req, res) => {
        res.send('welcome to application home put');
    })
    .post((req, res) => {
        res.send('welcome to application home post');
    });

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
