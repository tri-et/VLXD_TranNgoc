'use strict'
module.exports = (sequelize, DataTypes) => {
  var supplier = sequelize.define(
    'supplier',
    {
      taxCode: DataTypes.STRING,
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      phone: DataTypes.STRING,
    },
    {}
  )
  supplier.associate = function(models) {
    // associations can be defined here
  }
  return supplier
}
