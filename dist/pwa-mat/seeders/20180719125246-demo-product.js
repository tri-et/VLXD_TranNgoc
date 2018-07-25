'use strict';

var _d = require('lodash');
var Faker = require('faker');

var data = [];
_d.times(10, function () {
  data.push({
    code: Faker.address.countryCode(),
    name: Faker.commerce.productName(),
    unit: Faker.commerce.productMaterial(),
    listingPrice: Faker.commerce.price(),
    createdAt: new Date(),
    updatedAt: new Date()
  });
});
module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('products', data, {});
  },

  down: function down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('products', null, {});
  }
};