//config
const db = require("../../data/db-config");

const getAll = () => {
  return db('cars')
}

const getById = (id) => {
  return db('cars').where({id})
}

const create = (car) => {
  return db('cars').insert(car).then(data => {
    return getById(data[0])
  })
}

module.exports = {
  getAll,
  getById,
  create
}
