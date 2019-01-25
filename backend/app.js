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
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested With, Content-Type, Accept');
    next();
});





// Routes
const login = require('./controllers/login/login');
app.use('/', login);


//Ticker
var KiteTicker = require("kiteconnect").KiteTicker;
var ticker = new KiteTicker({
    api_key: "2ecedw57getitz4a",
    access_token: "rpmGYq0RdO7ONQB3Uxnn21MF3DWOauQD"
});

ticker.connect();
ticker.on("ticks", onTicks);
ticker.on("connect", subscribe);

function onTicks(ticks) {
    console.log("Ticks ", ticks);
}

function subscribe() {
    var items = [738561];
    ticker.subscribe(items);
    ticker.setMode(ticker.modeFull, items);
}





// Server
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
