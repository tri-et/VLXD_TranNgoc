'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

var _type = require('./type');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  listSupplier: {
    description: 'List all Suppliers ###\n    {\n      listSupplier {\n        id\n        name\n        taxcode\n        address\n        phone\n      }\n    }',
    type: new _graphql.GraphQLList(_type.Supplier),
    resolve: function resolve() {
      return _db2.default.models.supplier.findAll();
    }
  }
};