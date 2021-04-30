const express = require('express');
const {checkCarId} = require('./cars-middleware');
const db = require('./cars-model');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const cars = await db.getAll()
        res.status(200).json(cars)
    } catch (error) {
        next(next)
    }
})

router.use(function(err, req, res, next) {
    res.statusCode(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = router;