'use strict';
module.exports = (sequelize, DataTypes) => {
  var StockIn = sequelize.define('StockIn', {
    price: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
  }, {});
  StockIn.associate = function (models) {
    // associations can be defined here
    StockIn.belongsTo(models.Product, {
      foreignKey: 'productId',
    })
    StockIn.belongsTo(models.Supplier, {
      foreignKey: 'supplierId',
    })
  };
  return StockIn;
};