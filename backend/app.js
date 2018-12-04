const express = require('express');
require('dotenv').config();
const cors = require('cors')
const morgan = require('morgan');
const app = new express();

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));


app.use(morgan('tiny'));


app.get('/api/login/redirect', (req, res) => {
    console.log('This is the login redirect');
    console.log('The req params are: ', req.query);
    res.send('Thank you ')
});


// Routes
const login = require('./controllers/login/login');



app.use('/', login);



// Server
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});