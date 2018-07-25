'use strict';

var _d = require('lodash');
var Faker = require('faker');

var data = [];
_d.times(10, function () {
  data.push({
    username: Faker.address.countryCode(),
    password: Faker.commerce.productName(),
    roles: Faker.address.streetAddress(),
    createdAt: new Date(),
    updatedAt: new Date()
  });
});

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', data, {});
  },

  down: function down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};