const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/about', (req, res) => {
    // res.send('About page');
    res.render('pages/about', {
        //local variable
        name: 'Bangladesh',
    });
});

app.listen(3000, () => {
    console.log('Listening on Port 3000');
});
