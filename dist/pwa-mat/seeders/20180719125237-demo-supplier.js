'use strict';

var _d = require('lodash');
var Faker = require('faker');

var data = [];
_d.times(10, function () {
  data.push({
    taxCode: Faker.address.countryCode(),
    name: Faker.commerce.productName(),
    address: Faker.address.streetAddress(),
    phone: Faker.phone.phoneNumber(),
    createdAt: new Date(),
    updatedAt: new Date()
  });
});
module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('suppliers', data, {});
  },

  down: function down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('suppliers', null, {});
  }
};