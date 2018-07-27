'use strict';
module.exports = (sequelize, DataTypes) => {
  var Stock = sequelize.define('Stock', {
    quantity: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {});
  Stock.associate = function(models) {
    // associations can be defined here
    Stock.belongsTo(models.Product, {
      foreignKey: 'productId',
    })
  };
  return Stock;
};