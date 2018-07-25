'use strict'
const _d = require('lodash')
const Faker = require('faker')

var data = []
_d.times(10, () => {
  data.push({
    username: Faker.address.countryCode(),
    password: Faker.commerce.productName(),
    roles: Faker.address.streetAddress(),
    createdAt: new Date(),
    updatedAt: new Date(),
  })
})

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', data, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  },
}
