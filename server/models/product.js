'use strict'
module.exports = (sequelize, DataTypes) => {
  var product = sequelize.define(
    'product',
    {
      code: DataTypes.STRING,
      name: DataTypes.STRING,
      unit: DataTypes.STRING,
      listingPrice: DataTypes.INTEGER,
    },
    {}
  )
  product.associate = function(models) {
    // associations can be defined here
  }
  return product
}
