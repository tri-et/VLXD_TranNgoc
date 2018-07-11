'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SupplierInput = exports.Supplier = undefined;

var _graphql = require('graphql');

var Supplier = exports.Supplier = new _graphql.GraphQLObjectType({
  name: 'Supplier',
  description: 'Supplier Information ...',
  fields: function fields() {
    return {
      id: {
        type: _graphql.GraphQLInt,
        description: 'auto-gen id from Sequelize.',
        resolve: function resolve(supplier) {
          return supplier.id;
        }
      },
      taxcode: {
        type: _graphql.GraphQLString,
        description: 'This code should be controlled by user.',
        resolve: function resolve(supplier) {
          return supplier.taxcode;
        }
      },
      name: {
        type: _graphql.GraphQLString,
        resolve: function resolve(supplier) {
          return supplier.name;
        }
      },
      address: {
        type: _graphql.GraphQLString,
        resolve: function resolve(supplier) {
          return supplier.address;
        }
      },
      phone: {
        type: _graphql.GraphQLString,
        resolve: function resolve(supplier) {
          return supplier.phone;
        }
      }
    };
  }
});

var SupplierInput = exports.SupplierInput = new _graphql.GraphQLInputObjectType({
  name: 'SupplierInput',
  description: 'This is the Input for Supplier type',
  fields: function fields() {
    return {
      id: {
        // no need for GraphQLNonNull wrap, coz this Input's id is used in upsert later
        type: _graphql.GraphQLInt
      },
      taxcode: {
        type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
      },
      name: {
        type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
      },
      address: {
        type: _graphql.GraphQLString
      },
      phone: {
        type: _graphql.GraphQLString
      }
    };
  }
});