const express = require('express');
const router = new express();
const shajs = require('sha.js');
const request = require('request');
require('dotenv').config();



router.get('/', (req, res) => {
    console.log(`This is /`);
    res.send('hello');

});


router.get('/login', (req, res) => {
    console.log('inside login');
    res.json({
        url: process.env.loginRedirect + process.env.API_KEY
    });

    // res.redirect(process.env.loginRedirect + process.env.API_KEY);

})


router.get('/api/login/redirect', (req, res) => {

    const checksum = shajs('sha256').update(process.env.API_KEY + req.query.request_token + process.env.API_SECRET).digest('hex')

    function successLogin() {
        return new Promise(function (resolve, reject) {
            request.post({
                url: process.env.loginRedirect2,
                form: {
                    api_key: process.env.API_KEY,
                    request_token: req.query.request_token,
                    checksum: checksum
                },
                json: true
            }, (err, res, body) => {

                if (body.status === 'success') {
                    resolve(body.data);
                } else {
                    reject(body);
                }
            })
        });
    }


    successLogin()
        .then(
            (resolve) => {
                console.log('The resolve is: ', resolve.user_name);
                // res.status(200).json({
                //     message: 'success',
                //     data: resolve
                // });
                res.redirect(`http://localhost:4200/#/index?data=${encodeURIComponent(JSON.stringify(resolve))}`);
                // res.status(200).send(resolve);
            },
            (reject) => {
                console.log('The reject is: ', reject);
            }
        )
        .catch((err) => console.log('The reject is: ', err));
});

module.exports = router;