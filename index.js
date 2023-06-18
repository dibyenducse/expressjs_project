const express = require('express'); //express return function
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cookieParser());

//make a sub app

const adminRoute = express.Router();
adminRoute.get('/dashboard', (req, res) => {
    console.log(req.originalUrl);
    console.log(req.url);
    console.log(req.path);
    res.send('We are in Admin Dashboard');
});

app.use('/admin', adminRoute);

app.get('/user/:id', (req, res) => {
    console.log(req.originalUrl);
    console.log(req.url);
    console.log(req.path);
    console.log(req.method);
    console.log(req.protocol);
    console.log(req.params);
    console.log(req.query); //return object
    console.log(req.body); //return object
    console.log(req.cookies); //return object
    console.log(req.route);

    res.send('Hello World');
});

app.post('/user', (req, res) => {
    console.log(req.body);
    res.send('Hello Post Method');
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});
