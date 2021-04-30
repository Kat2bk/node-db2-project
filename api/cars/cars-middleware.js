const db = require('./cars-model');

const checkCarId = (req, res, next) => {
  const id = req.params.id;

  db.getById(id)
  .then(car => {
    if (!car) {
      res.status(404).json({
        message: `the car with id ${id} is not found`
      })
    } else {
      next()
    }
  })

}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
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
