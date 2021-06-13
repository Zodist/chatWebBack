const router = require('express').Router();
const Country = require('../models/earth2');

function date2string(params) {
    var mm = params.getMonth() + 1;
    var dd = params.getDate();
    var hh = params.getHours();

    return [params.getFullYear(),
    (mm > 9 ? '' : '0') + mm,
    (dd > 9 ? '' : '0') + dd,
    (hh > 9 ? '' : '0') + hh
    ].join('');
}

router.get('/', (req, res) => {
    Country.find({})
        .then((countries) => {
            if (!countries.length) return res.status(404).send({ err: 'Country not Found' });
            let latestUpdateTime = countries[0].time;
            for (let i = 0; i < countries.length; i++) {
                if (countries[i].time > latestUpdateTime) {
                    latestUpdateTime = countries[i].time;
                }
            }
            console.log("latestUpdateTime: ", latestUpdateTime)
            let filteredCountries = countries.filter(el => {
                return date2string(el.time) == date2string(latestUpdateTime);
            });
            res.send(filteredCountries);
        })
        .catch(err => res.status(500).send(err));
});

router.get('/:countryCd', (req, res) => {
    Country.find({code:req.params.countryCd})
        .then((countries) => {
            if (!countries.length) return res.status(404).send({ err: 'Country not Found' });
            res.send(countries);
        })
        .catch(err => res.status(500).send(err));
});

module.exports = router