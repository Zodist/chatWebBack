const router = require('express').Router();
const request = require('request')

router.get('/', (req, res) => {
    const requestUrl_earth2 = 'https://earth2stats.net/api/get_countries';
    // const ak = 'cf2b4ee42c55630ff5723fc937b925e6'
    // const requestUrl_exchangeRatio = `http://api.exchangeratesapi.io/v1/latest?base=USD&access_key=${ak}`;
    // const requestUrl_exchangeRatio = `http://api.exchangeratesapi.io/v1/convert?access_key=${ak}&from=USD&to=KOR&amount=1`;
    // const requestUrl_exchangeRatio = 'http://api.exchangeratesapi.io/v1/latest?access_key=cf2b4ee42c55630ff5723fc937b925e6?base=USD'

    const requestUrl_exchangeRatio = 'https://earthquake.kr:23490/query/USDKRW'
    request(requestUrl_earth2, (err, response, body) => {

        if (err) console.log(err);
        let data = JSON.parse(body);
        data.forEach(element => {
            element.assume_total_price = element.marketplace_tile_value * element.total_sold_tiles;
        });
        // res.send(data);

        request(requestUrl_exchangeRatio, (err, response, body) => {
            if (err) console.log(err);
            const usdkrw = JSON.parse(body).USDKRW[0];
            // console.log(usdkrw);
            data.forEach(element => {
                element.new_tile_price = Math.round(element.new_tile_price * usdkrw);
                element.marketplace_tile_value = Math.round(element.marketplace_tile_value * usdkrw);
                element.assume_total_price = Math.round(element.assume_total_price * usdkrw);
            });
            res.send(data);
        })
    })
})

module.exports = router