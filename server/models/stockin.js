'use strict';
import db from './stock'
module.exports = (sequelize, DataTypes) => {
  var StockIn = sequelize.define('StockIn', {
    price: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
  }, {
      hooks: {
        afterCreate: ({ dataValues }, options) => {
          sequelize.models.Stock.findOrCreate({
            where: {
              productId: dataValues.productId,
              price: dataValues.price
            },
            defaults: dataValues
          }).spread((stockin, created) => {
            if (!created) {
              sequelize.models.Stock.update({ quantity: parseInt(stockin.get('quantity')) + parseInt(dataValues.quantity) }, {
                where: {
                  id: stockin.get('id')
                }
              })
            }
          }, {
              transaction: options.transaction
            })
        },
        afterUpdate: ({ dataValues, _previousDataValues, _changed }, options) => {
          var changedQuantity = parseInt(dataValues.quantity) - parseInt(_previousDataValues.quantity)
          if (_changed.quantity) {
            sequelize.models.Stock.findOne({
              where: {
                productId: _previousDataValues.productId,
                price: _previousDataValues.price
              }
            }, {
                transaction: options.transaction
              }).then(stockin => {
                sequelize.models.Stock.update({ quantity: parseInt(stockin.get('quantity')) + changedQuantity }, {
                  where: {
                    id: stockin.get('id')
                  }
                })
              })
          }
        },
        afterDestroy: ({ dataValues }, options) => {
          sequelize.models.Stock.findOne({
            where: {
              productId: dataValues.productId,
              price: dataValues.price
            }
          }, {
              transaction: options.transaction
            }).then(stockin => {
              console.log(stockin)
              return sequelize.models.Stock.decrement('quantity', {
                where: {
                  id: stockin.get('id')
                }, by: parseInt(dataValues.quantity)
              })
            })
        }
      }
    });
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