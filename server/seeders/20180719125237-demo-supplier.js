'use strict'
const _d = require('lodash')
const Faker = require('faker')

var data = []
_d.times(10, () => {
  data.push({
    taxCode: Faker.address.countryCode(),
    name: Faker.commerce.productName(),
    address: Faker.address.streetAddress(),
    phone: Faker.phone.phoneNumber(),
    createdAt: new Date(),
    updatedAt: new Date(),
  })
})
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('suppliers', data, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('suppliers', null, {})
  },
}
