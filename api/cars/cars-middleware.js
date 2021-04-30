const db = require('./cars-model');

const checkCarId = (req, res, next) => {
  const id = req.params.id;

  db.getById(id)
  .then(car => {
    if (car) {
    req.car = car
      next()
    } else if (car == null || car == undefined) {
      res.status(404).json({
        message: `the car with id ${id} is not found`
      })
    }
  })
  .catch(error => {
    next(error)
  })

}

const checkCarPayload = (req, res, next) => {
  if (!req.body.vin) {
    res.status(400).json({ message: "vin number is missing"})
  } else if (!req.body.make) {
    res.status(400).json({message: "make of car is missing"})
  } else if (!req.body.model) {
    res.status(400).json({message: "model of car is missing"})
  } else if (!req.body.mileage) {
    res.status(400).json({message: "mileage is missing"})
  } else {
    next()
  }
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

module.exports = {
  checkCarId,
  checkCarPayload
}
