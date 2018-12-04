const express = require('express');
const router = new express();
require('dotenv').config();



router.get('/', (req, res) => {
    console.log(`This is /`);
    res.send('hello');
});


router.get('/login', (req, res) => {
    console.log('inside login');

    res.redirect('https://cors.io/?'+process.env.loginRedirect + process.env.API_KEY);

})

module.exports = router;