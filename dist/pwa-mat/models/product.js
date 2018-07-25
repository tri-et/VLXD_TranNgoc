'use strict';

module.exports = function (sequelize, DataTypes) {
  var Product = sequelize.define('Product', {
    code: DataTypes.STRING,
    name: DataTypes.STRING,
    unit: DataTypes.STRING,
    listingPrice: DataTypes.INTEGER
  }, {});
  Product.associate = function (models) {
    // associations can be defined here
  };
  return Product;
};