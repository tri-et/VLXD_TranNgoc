'use strict';

module.exports = function (sequelize, DataTypes) {
  var Supplier = sequelize.define('Supplier', {
    taxCode: DataTypes.STRING,
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  Supplier.associate = function (models) {
    // associations can be defined here
  };
  return Supplier;
};