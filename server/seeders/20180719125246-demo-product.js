'use strict'
const _d = require('lodash')
const Faker = require('faker')

var data = []
_d.times(10, () => {
  data.push({
    code: Faker.address.countryCode(),
    name: Faker.commerce.productName(),
    unit: Faker.commerce.productMaterial(),
    listingPrice: Faker.commerce.price(),
    createdAt: new Date(),
    updatedAt: new Date(),
  })
})
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', data, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {})
  },
}
