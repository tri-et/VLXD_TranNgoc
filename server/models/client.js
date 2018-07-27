'use strict'
module.exports = (sequelize, DataTypes) => {
  var Client = sequelize.define(
    'Client',
    {
      code: DataTypes.STRING,
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      phone: DataTypes.STRING,
    },
    {}
  )
  Client.associate = function(models) {
    // associations can be defined here
  }
  return Client
}
