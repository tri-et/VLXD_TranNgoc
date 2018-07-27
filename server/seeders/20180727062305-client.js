'use strict'
const _d = require('lodash')
const Faker = require('faker')

var data = []
_d.times(10, () => {
  data.push({
    code: Faker.random.number(),
    name: Faker.commerce.productName(),
    address: Faker.commerce.productMaterial(),
    phone: Faker.random.number(),
    createdAt: new Date(),
    updatedAt: new Date(),
  })
})
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('clients', data, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('clients', null, {})
  },
}
