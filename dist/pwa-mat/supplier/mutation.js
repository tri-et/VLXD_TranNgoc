'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _type = require('./type');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Op = _sequelize2.default.Op;

exports.default = {
  deleteSupplier: {
    type: _graphql.GraphQLInt,
    args: {
      input: {
        type: new _graphql.GraphQLList(_graphql.GraphQLInt)
      }
    },
    resolve: function resolve(_, _ref) {
      var input = _ref.input;

      return _db2.default.models.supplier.destroy({
        where: {
          id: _defineProperty({}, Op.in, input)
        }
      });
    }
  },
  updateSupplier: {
    type: _type.Supplier,
    args: {
      input: {
        type: _type.SupplierInput
      }
    },
    resolve: function resolve(_, _ref2) {
      var input = _ref2.input;

      return _db2.default.models.supplier.upsert(input).then(function () {
        return input;
      });
    }
  }
};