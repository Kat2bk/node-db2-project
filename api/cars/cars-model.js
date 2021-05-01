//config
const db = require("../../data/db-config");

const getAll = () => {
  return db('cars')
}

const getById = (id) => {
  return db('cars').where('id', id).first()
}

const create = (car) => {
  return db('cars').insert(car).then(data => {
    return getById(data[0])
  })
}

const getVin = (vin) => {
  return db('cars').where('vin', vin).first()
}

module.exports = {
  getAll,
  getById,
  create,
  getVin
}
