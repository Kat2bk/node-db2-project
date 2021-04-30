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

router.get('/:id', checkCarId, async (req, res, next) => {
    try {
       const car = await db.getById(req.params.id)
        res.status(200).json(car)
    } catch (error) {
        next(error)
    }
})


router.post('/', async (req, res, next) => {
    const car = {
        "vin": req.body.vin,
        "make": req.body.make,
        "model": req.body.model,
        "mileage": req.body.mileage,
        "title": req.body.title,
        "transmission": req.body.tranmission
    }

    try {
        const newCar = await db.create(req.body)
        res.status(201).json(newCar)
    } catch (error) {
        next(error)
    }
})

router.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = router;