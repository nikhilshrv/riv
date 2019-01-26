const express = require('express');
const router = new express();
const request = require('request');
require('dotenv').config();



router.get('/check', (req, res) => {

    console.log('Came to check fund ', req.query.token)

    function successFundCheck() {
        return new Promise(function (resolve, reject) {
            request.get({
                url: 'https://api.kite.trade/user/margins',
                headers: {
                    'X-Kite-Version': '3',
                    'Authorization': `token ${process.env.API_KEY}:${req.query.token}`
                }
            }, (err, res, body) => {

                body = JSON.parse(body);

                if (body.status === 'success') {
                    resolve(body.data);
                } else {
                    reject(body);
                }
            })
        });
    }


    successFundCheck()
        .then(
            (resolve) => {
                console.log('The resolve is: ', resolve);
                res.status(200).json({
                    message: 'success',
                    data: resolve
                });
                // res.redirect(`http://localhost:4200/index?data=${encodeURIComponent(JSON.stringify(resolve))}`);
            },
            (reject) => {
                console.log('The reject is: ', reject);
            }
        )
        .catch((err) => console.log('The error is: ', err));
});

module.exports = router;