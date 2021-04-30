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
  
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

module.exports = {
  checkCarId
}
